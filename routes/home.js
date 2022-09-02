const express = require("express");

const userController = require("../controller/userController");
const productController = require("../controller/productController");
const { check } = require("express-validator");
const auth = require("../middleware/credentials");
const checkUserType = require("../middleware/checkUserType");
const router = express.Router();

/* User Router */
router.get("/", userController.index);
router.get("/getAllUsers", checkUserType, userController.getAllUsers);
router.get("/user/:id", auth, userController.getOneUser);
router.post(
  "/createUser",
  [
    check("email", "Please Enter Valid Email").isEmail(),
    check(
      "password",
      "Please enter valid password that is greater than 6 charecter"
    ).isLength({ min: 6 }),
  ],
  userController.AddUser
);
router.post("/loginUser", userController.loginUser);
router.put("/updateUser/:id", checkUserType, userController.updateUser);
router.delete("/deleteUser/:id", checkUserType, userController.deleteUser);
/* get user carts */
router.get("/getUserCarts/:id", auth, userController.getUserCarts);
/* get user Order */
router.get("/getUserOrders/:id", auth, userController.getUserOrder);

/* Product Router */
router.get("/testProduct", productController.index);
router.get("/getAllProducts", checkUserType, productController.getAllProducts);
router.get("/product/:id", auth, productController.getOneProduct);
router.post("/createProduct", checkUserType, productController.AddProduct);
router.put(
  "/updateProduct/:id",
  checkUserType,
  productController.updateProduct
);
router.delete(
  "/deleteProduct/:id",
  checkUserType,
  productController.deleteProduct
);

module.exports = router;
