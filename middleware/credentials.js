const JWT = require("jsonwebtoken");
module.exports = async (req, res, next) =>{
    const token = req.header('authorization');
    if(!token){
        return res.status(400).json({
             "errors":[
                 {"msg": "No token found"}
             ]
         })
     };
     try{
        let user = await JWT.verify(token, "ssdfsdffd323x");
        // req.user = user.email;
        next();
     }
     catch(error){
        return res.status(400).json({
            "errors":[
                {"msg": "Invalid Token"}
            ]
        })
    };
}
