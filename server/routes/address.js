const router = require('express').Router();
const Address = require('../models/address');
const User = require('../models/user');
const verifyToken = require('../middlewares/verify-token');
const axios = require('axios');

// POST Criar um endereço
router.post('/addresses', verifyToken, async (req, res) =>{
    try {       
        let address = new Address();
        address.user = req.decoded._id;
        address.country =  req.body.data.country;      
        address.fullName = req.body.data.fullName;
        address.streetAddress = req.body.data.streetAddress;
        address.city = req.body.data.city;
        address.state = req.body.data.state;
        address.zipCode = parseInt(req.body.data.zipCode);
        address.phoneNumber = req.body.data.phoneNumber;
        address.deliverInstructions = req.body.data.deliverInstructions;
        address.securityCode = req.body.data.securityCode;     

        await address.save();
       
        res.json({
            success: true,
            message: "Endereço cadastrado com sucesso!"
        });
       
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// GET Pegar todos os endereços do usuário
router.get("/addresses", verifyToken, async (req, res) =>{
    try {
        let addresses = await Address.find({ user: req.decoded._id });

        res.json({
            success: true,
            addresses: addresses
        });


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// GET Retorna países
router.get("/countries", async (req, res) => {
    try {
        let response = await axios.get("https://restcountries.eu/rest/v2/all");

            res.json(response.data);


    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// GET Pega um endereço do usuário
router.get('/addresses/:id', verifyToken, async (req, res) => {
    try {
        let address = await Address.findOne({_id: req.params.id});

        res.json({
            success: true,
            address: address
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// PUT Atualizado um endereço do usuário
router.put('/addresses/:id', verifyToken, async(req, res) => {
    try {
        let foundAddress = await Address.findOne({  user: req.decoded._id, _id: req.params.id});
        if(foundAddress){
          
            if(req.body.data.country) foundAddress.country =  req.body.data.country;      
            if(req.body.data.fullName) foundAddress.fullName = req.body.data.fullName;
            if(req.body.data.streetAddress) foundAddress.streetAddress = req.body.data.streetAddress;
            if(req.body.data.city) foundAddress.city = req.body.data.city;
            if(req.body.data.state) foundAddress.state = req.body.data.state;
            if(req.body.data.zipCode) foundAddress.zipCode = parseInt(req.body.data.zipCode);
            if(req.body.data.phoneNumber) foundAddress.phoneNumber = req.body.data.phoneNumber;
            if(req.body.data.deliverInstructions) foundAddress.deliverInstructions = req.body.data.deliverInstructions;
            if(req.body.data.securityCode) foundAddress.securityCode = req.body.data.securityCode;
            
            await foundAddress.save();

            res.json({
                success: true,
                message: "Endereço atualizado com sucesso!"
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});
// DELETE deleta um endereço do usuário
router.delete('/addresses/:id', verifyToken, async (req, res) => {
    try {
        let deletedAddress = await Address.remove({
            user: req.decoded._id,
             _id: req.params.id
            });

        if(deletedAddress) {
            res.json({
                success: true,
                message: "Endereço deletado com sucesso!"
            });
        }       

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});
// PUT Atualiza o endereço padrão
router.put('/addresses/set/default',verifyToken, async (req, res) =>{
try {
    const updatedAddressUser = await User.findOneAndUpdate({_id: req.decoded._id}, { $set: { address: req.body.id }});
    if(updatedAddressUser){
        res.json({
            success: true,
            message: "Endereço padrão atualizado com sucesso!"
        })
    }
} catch (err) {
    console.log(err)
    res.status(500).json({
        success: false,
        message: err.message
    });
}
});

module.exports = router;
