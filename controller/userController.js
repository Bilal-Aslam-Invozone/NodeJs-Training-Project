const db = require("../models");
const User = db.User;
const Cart = db.Cart;
const Order = db.Order;
const OrderProduct = db.OrderProduct;
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

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
    try {
      return User.findAll({})
        .then((users) => res.status(200).send(users))
        .catch((error) => {
          res.status(400).send(error);
        });
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },
  // 3. get single User By ID
  async getOneUser(req, res) {
    let id = req.params.id;
    let user = await User.findOne({ where: { id: id } });
    if (!user) {
      res.status(400).send("User is not exist");
    } else {
      res.status(200).send(user);
    }
  },

  //  4. Create a Create/signUp User
  async AddUser(req, res) {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
    };
    // const {password, email}=req.body;

    //VALIDATE THE INPUTS
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    console.log(
      `Password is ${newUser.password}  and your Email is ${newUser.email}`
    );

    //VALIDATE THE USER IF ALREADY EXIST IN DATABASE
    let user = await User.findOne({ where: { email: newUser.email } });
    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: "This user is already exist.",
          },
        ],
      });
    }

    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    console.log(hashedPassword);
    const finalizedUser = {
      userType: req.body.userType,
      email: req.body.email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    User.create(finalizedUser);
    const token = await JWT.sign(
      {
        userType: finalizedUser.userType,
        email: finalizedUser.email,
        password: finalizedUser.password,
      },
      "ssdfsdffd323x",
      {
        expiresIn: 3600000,
      }
    );
    res.json(token);
  },

  // Login User
  async loginUser(req, res) {
    const { email, password } = req.body;
    let user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({
        msg: "Invalid Credentialsok",
      });
    }
    console.log(user.password);
    console.log(password);
    // let isMatch= await bcrypt.compare(password,user.password)
    if (password !== user.password) {
      return res.status(400).json({
        msg: "Invalid Credentialsss",
      });
    }
    const token = await JWT.sign(
      {
        email,
        userType: user.userType,
      },
      "ssdfsdffd323x",
      {
        expiresIn: 3600000,
      }
    );
    res.json(token);
  },

  // 5. update User Data
  async updateUser(req, res) {
    try {
      let id = req.params.id;
      const updatedUser = await User.update(req.body, { where: { id: id } });
      res.status(200).send(updatedUser);
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },

  // 6. Delete User by id
  async deleteUser(req, res) {
    let id = req.params.id;
    let user = await User.findOne({ where: { id: id } });
    if (!user) {
      res.status(400).send("User is not exist");
    } else {
      await User.destroy({ where: { id: id } });
      res.status(200).send("User is deleted !");
    }
  },

  // 7. connect one to many relation User and Carts
  async getUserCarts(req, res) {
    try {
      const id = req.params.id;
      const data = await User.findAll({
        attributes: ["id"],
        include: [
          {
            model: Cart,
            // attributes:['id','quantity','productId'],
          },
        ],
        where: { id: id },
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },

  // 7. getUserOrder
  async getUserOrder(req, res) {
    try {
      const id = req.params.id;

      const data = await User.findAll({
        attributes: [["id", "userId"], "email"],
        include: [
          {
            model: Order,
            // as: 'UserorderInfo',
            attributes: [["id", "orderId"]],
            include: [
              {
                model: OrderProduct,
                attributes: ["productId"],
              },
            ],
          },
        ],
        where: { id: id },
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  },
};
