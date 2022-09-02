const db = require("../models");
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

  // 2. get All Products
  async getAllProducts(req, res) {
    try {
      const pro = await Product.findAll({});
      res.status(200).json(pro);
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },

  // 3. get single Product By ID
  async getOneProduct(req, res) {
    let id = req.params.id;
    let product = await Product.findOne({ where: { id: id } });
    if (!product) {
      res.status(400).send("product is not exist");
    } else {
      res.status(200).send(product);
    }
  },

  // 4. Create a New Product
  async AddProduct(req, res) {
    try {
      const product = {
        name: req.body.name,
        description: req.body.description,
        imgPath: req.body.imgPath,
        status: req.body.status,
        price: req.body.price,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      console.log(product);
      Product.create(product)
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user.",
          });
        });
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },

  // 5. update User Data
  async updateProduct(req, res) {
    try {
      let id = req.params.id;
      const updatedProduct = await Product.update(req.body, {
        where: { id: id },
      });
      res.status(200).send(updatedProduct);
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },
  // 6. Delete User by id

  async deleteProduct(req, res) {
    let id = req.params.id;
    let product = await Product.findOne({ where: { id: id } });
    if (!product) {
      res.status(400).send("Product is not exist");
    } else {
      await Product.destroy({ where: { id: id } });
      res.status(200).send("Product is deleted !");
    }
  },

  // 8. Upload Image Controller
  async upload() {
    multer({
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, "Images");
        },
        filename: (req, file, cb) => {
          cb(null, Date.now() + path.extname(file.originalname));
        },
      }),
      limits: { fileSize: "1000000" },
      fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
          return cb(null, true);
        }
        cb("Give proper files formate to upload");
      },
    }).single("image");
  },
};
