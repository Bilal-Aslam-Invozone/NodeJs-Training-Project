var db = require("../models");
const JWT = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  const token = req.header("authorization");

  if (!token) {
    return res.status(400).json({
      errors: [{ msg: "No token found" }],
    });
  }

  let user = await JWT.verify(token, "ssdfsdffd323x");
  // req.user = user.email;
  console.log(token.userType);
  if (user.userType === "Admin") {
    next();
  } else {
    return res.status(400).json({
      errors: [{ msg: "You are not Admin" }],
    });
  }
};
