const router = require('express').Router();
const User = require('../models/user');
const verifyToken = require('../middlewares/verify-token');


const jwt = require('jsonwebtoken');

/* Sign up route */
router.post('/auth/signup', async (req, res) => {
   
    if(!req.body.data.email || !req.body.data.password) {
        console.log(req.body.data)
        res.json({success: false,
        message: "Por favor insira o email ou a senha"});
    } else {
        try {
            let newUser = new User();
            newUser.name = req.body.data.name;
            newUser.email = req.body.data.email;
            newUser.password = req.body.data.password;
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: '10h' 
            });

            res.json({
                success: true,
                token: token,
                message: "Novo usuário criado com sucesso!"
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
});

/* Profile Route */
router.get('/auth/user', verifyToken, async (req, res) => {
    try {
        let foundUser = await User.findOne({_id: req.decoded._id}).populate('address');
        if(foundUser) {
            res.json({
                success: true,
                user: foundUser
            })
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

/* Update Profile Route */
router.put('/auth/user', verifyToken, async (req, res) => {
    try {
        let foundUser = await User.findOne({_id: req.decoded._id});
        if(foundUser) {
           if(req.body.data.name) foundUser.name = req.body.data.name;
           if(req.body.data.email) foundUser.email = req.body.data.email;
           if(req.body.data.password) foundUser.password = req.body.data.password;

           await foundUser.save();

           res.json({
               success: true,
               message: "Informações atualizadas com sucesso!"
           });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

/*Login route*/
router.post('/auth/login', async (req, res) => {
try {
    let foundUser = await User.findOne({email: req.body.email });
    if (!foundUser) {
        res.status(403).json({
            success:false,
            message: "Usuário não encontrado!"
        })
    } else {
        if(foundUser.comparePassword(req.body.password)){
            let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                expiresIn: '10H'
            })

            res.json({
                success: true,
                token: token
            })
        } else {
            res.status(403).json({
                success:false,
                message: "Senha inválida!"
            })
        }
    }

} catch (err) {

}
});

module.exports = router;
