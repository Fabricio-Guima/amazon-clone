const router = require('express').Router();
const Review = require('../models/review');
const Product = require('../models/product');
const verifyToken = require('../middlewares/verify-token');
//const upload = require('../middlewares/upload-photos');

//[verifyToken, upload.single("photo")]
router.post('/reviews/:productID', verifyToken, async (req, res)=> {
       try {
        const review = new Review();
        review.headline = req.body.data.headline;
        review.body = req.body.data.body;
        review.rating = req.body.data.rating;
        //review.photo = req.file.data.location;
        review.user = req.decoded._id; //req.body.data._id; 
        review.productID = req.params.productID;
        console.log(req.body.data.headline)

        await Product.update({ $push: { reviews: review._id }});

        const saveReview = await review.save();

        if(saveReview) {
            res.json({
                success: true,
                message: "Review adicionado com sucesso!"
            });
        }


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get("/review/:productID", async (req, res)=> {
    try {
        const productReviews = await Review.find({
            productID: req.params.productID
        }).populate('user').exec();
        console.log(productReviews)
        res.json({
            success: true,
            review: productReviews
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});



module.exports = router;