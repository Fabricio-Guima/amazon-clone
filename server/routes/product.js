const router = require('express').Router();
const Product = require('../models/product');

const upload = require('../middlewares/upload-photos');

// Post request - criar novo produto
router.post('/products', async(req, res) => {
    try{
        console.log(req.body.data.title);
        let product = new Product();
        product.title = req.body.data.title;
        product.description = req.body.data.description;
        product.photo = req.body.data.photo;
        product.price = req.body.data.price;
        product.stockQuantity = req.body.data.stockQuantity;
        product.rating = req.body.data.rating;
        product.owner = req.body.data.ownerID;
        product.category = req.body.data.categoryID;

        await product.save();

        res.json({
            status: true,
            message: "Produto cadastrado com sucesso!"
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message: err.message
        });
    }
   

})

// Get request - pegar todos os produtos
router.get('/products', async (req, res) => {
    try{
        let products = await Product.find().populate('owner category').exec();
        res.json({
            success: true,
            products: products
        })

    } catch (err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

// Get request - pegar um produto apenas
router.get('/products/:id', async (req, res) => {
    try{

        let product = await Product.findOne({ _id: req.params.id}).populate('owner category').exec();
        res.json({
            success: true,
            product: product
        })

    } catch (err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

// Put request - atualizar dados de um produto
router.put('/products/:id', async (req, res) => {
    console.log(req.body)
    try{
        let product = await Product.findOneAndUpdate(
            { _id: req.params.id},
            {
                $set: {
                    title: req.body.data.title,
                    description: req.body.data.description,
                    photo: req.body.data.photo,
                    price: req.body.data.price,
                    category: req.body.data.category,
                    owner: req.body.data.owner,
                    stockQuantity: req.body.data.stockQuantity                       
                }
            },
            {   
               upsert: true, 
               new: true,               
            }
        )

        res.json({
            success: true,
            message: "Produto alterado com sucesso!",
            updatedProduct: product
        });

    } catch (err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// Delete request - deletar um produto
router.delete('/products/:id', async (req, res) => {
try{
    let deleteproduct = await Product.findOneAndDelete({_id: req.params.id});

    if(deleteproduct) {
        res.json({
            success: true,
            message: "Produto deletado com sucesso!",
            product: deleteproduct
        });
    }

} catch (err){
    res.status(500).json({
        success: false,
        message: err.message
    });
}
});
module.exports = router;