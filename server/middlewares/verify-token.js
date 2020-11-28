const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    let token = req.headers['authorization'];
    console.log(token)
     
    if(token != undefined){

        const bearer = token.split(" ");
        let onlyToken = bearer[1];
       
           
          jwt.verify(onlyToken, process.env.SECRET, (err, decoded) => {
              if(err) {
                  res.json({
                      success: false,
                      message: "Falha ao autenticar! 1"
                  })
              } else {
                  req.decoded = decoded;
                  req.decoded._id
                  next();
              }
          })
    } else {
        res.status(401);
        res.json({message: "Token inválido!"});
    }
     
    
}