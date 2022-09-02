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













// const jwt = require ("jsonwebtoken") ;

// const auth = ( req , res , next ) => {
//    try {                    
//     console.log("HTTP Method:  "+req.method+" , URL:  ",req.url)
//        let token =req.headers.authorization ;
//        if ( token ){
//             token = token.split (" ")[1] ;
//             let user=jwt.verify (token , "skdfii9sdijjisdmjj9eds") ;
//             req.userId = user.id ;
//        }
//        else 
//        {
//             res.status(401).json( {message : " Unauthorized User " } ) ;
//        }
//        next ( ) ;
//     } catch ( error ) {
//         console.log ( error ) ;
//        res.status(401).json({message : " Unauthorized User "}) ;    
//     }}
// module.exports= auth ;