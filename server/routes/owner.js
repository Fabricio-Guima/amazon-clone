const router = require('express').Router();
const Owner = require('../models/owner');
const upload = require('../middlewares/upload-photos');

// Post reqquest
router.post('/owners', async (req, res) => {
    try {
        let owner = new Owner();
        owner.name = req.body.data.name;
        owner.about = req.body.data.about;
        //owner.photo = req.file.location;       
        await owner.save();

        res.json({
            success: true,
            message: "Proprietário cadastrado com sucesso!"
        });        
    }catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

//Get request
router.get('/owners', async (req, res) => {
    try {
        let owners =  await Owner.find();

        res.json({
            owners: owners
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

module.exports = router;