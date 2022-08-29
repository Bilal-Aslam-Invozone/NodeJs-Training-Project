const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;
module.exports = {
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
  list(req, res) {
    return User
      .findAll({})
      .then((users) => res.status(200).send(users))
      .catch((error) => { res.status(400).send(error); });
  },
AddUser(req, res) {
  try {
    const user = {
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


};



