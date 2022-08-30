const db = require("../models");
const User = db.User;
 const Cart= db.Cart;
 const Product = db.Product;
module.exports = {
 // 1. Simple API Testing 
  async index(req, res) {
    try {
      res.json({
        status: true,
        message: "Operation completed successfully.",
        data: [], 
      });
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },

// 2. get All User  
  getAllUsers(req, res) {
    return User
      .findAll({})
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },

// 3. get single User By ID
  async getOneUser(req, res) 
  {
    let id = req.params.id
    let user = await User.findOne({ where: { id: id}})
    res.status(200).send(user)
},


// 4. Create a New User
async AddUser(req, res) {
  try {
    const user = {
      userType: req.body.userType,
      email: req.body.email,
      password: req.body.password, 
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt
  };
  User.create(user).then(data=>{res.status(200).send(data)})
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
  } 
  catch (err) {
    res.status(400).json({ status: false, message: err });
  }
},

// 5. update User Data
async updateUser(req, res) {
    try {
            let id = req.params.id
            const user = await User.update(req.body, { where: { id: id }})
            res.status(200).send(user)
        } 
    catch (err)
        {
            res.status(400).json({ status: false, message: err });
        }
},
// 6. Delete User by id

async deleteUser(req, res){

    try {
        let id = req.params.id
        await User.destroy({ where: { id: id }} )
        res.status(200).send('User is deleted !')
    } 
catch (err)
    {
        res.status(400).json({ status: false, message: err });
    }
    

},

// 7. connect one to many relation User and Carts

async getUserCarts(req, res){
    try {
        const id = req.params.id
        const data = await User.findAll({
          attributes:['id'],
        include: [{
            model: Cart,
            as: 'cartInfo',
            attributes:['id','quantity'],
          //   include: [{
          //     model: Product,
          //     as: 'productInfo',
          //     attributes:[['name','ProductName'],'price'],
          // }],
          // where: { id: id }
        }],
        where: { id: id }
    });
    res.status(200).json(data)
    } 
catch (err)
    {
        res.status(400).json({ status: false, message: err });
    }
    
}

};













// const db = require('../models')

// // image Upload
// const multer = require('multer')
// const path = require('path')


// // create main Model
// const Product = db.products
// const Review = db.reviews

// // main work

// // 1. create product

// const addProduct = async (req, res) => {

//     let info = {
//         image: req.file.path,
//         title: req.body.title,
//         price: req.body.price,
//         description: req.body.description,
//         published: req.body.published ? req.body.published : false
//     }

//     const product = await Product.create(info)
//     res.status(200).send(product)
//     console.log(product)

// }



// // 2. get all products

// const getAllProducts = async (req, res) => {

//     let products = await Product.findAll({})
//     res.status(200).send(products)

// }

// // 3. get single product

// const getOneProduct = async (req, res) => {

//     let id = req.params.id
//     let product = await Product.findOne({ where: { id: id }})
//     res.status(200).send(product)

// }

// // 4. update Product

// const updateProduct = async (req, res) => {

//     let id = req.params.id

//     const product = await Product.update(req.body, { where: { id: id }})

//     res.status(200).send(product)
   

// }

// // 5. delete product by id

// const deleteProduct = async (req, res) => {

//     let id = req.params.id
    
//     await Product.destroy({ where: { id: id }} )

//     res.status(200).send('Product is deleted !')

// }

// // 6. get published product

// const getPublishedProduct = async (req, res) => {

//     const products =  await Product.findAll({ where: { published: true }})

//     res.status(200).send(products)

// }

// // 7. connect one to many relation Product and Reviews

// const getProductReviews =  async (req, res) => {

//     const id = req.params.id

//     const data = await Product.findOne({
//         include: [{
//             model: Review,
//             as: 'review'
//         }],
//         where: { id: id }
//     })

//     res.status(200).send(data)

// }


// // 8. Upload Image Controller

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('image')









// module.exports = {
//     addProduct,
//     getAllProducts,
//     getOneProduct,
//     updateProduct,
//     deleteProduct,
//     getPublishedProduct,
//     getProductReviews,
//     upload
    
// }