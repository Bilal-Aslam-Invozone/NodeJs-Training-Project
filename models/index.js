"use strict";
const sequelize = require("./sequelize_index").sequelize;
const User = require("./User");
const Cart = require("./Cart");
const Order = require("./Order");
const Product = require("./Product");
const OrderProduct = require("./OrderProduct");
const ProductOrder = require("./ProductOrder");

// Association One-To-Many (User-Cart-Table)
User.hasMany(Cart, {
  foreignkey: "userId",
});
// Cart.belongsTo(User,{foreignkey:"userId",
// });

// Association One-To-Many (Cart-Product-Table)
Product.hasMany(Cart, {
  foreignkey: "productId",
  //  as : 'productInfo'
});
// Product.belongsTo(Cart,{foreignkey:"productId",
// // as : 'cartInfo'
// });

// Association One-To-Many (User-Order-Table)
User.hasMany(Order, { foreignkey: "userId" });
// Order.belongsTo(User,{foreignkey:"userId"});

// Association Many-To-Many (Order-OrderProduct-Table)
Order.belongsToMany(OrderProduct, { through: ProductOrder });
// OrderProduct.belongsToMany(Order, { through: ProductOrder });

// Association Many-To-Many (Product-OrderProduct-Table)
Product.belongsToMany(OrderProduct, { through: ProductOrder });
// OrderProduct.belongsToMany(Product, { through: ProductOrder });

sequelize.sync({ force: false }).then(function () {
  console.log("Database Configured");
});
module.exports = { User, Cart, Product, Order, OrderProduct, ProductOrder };
