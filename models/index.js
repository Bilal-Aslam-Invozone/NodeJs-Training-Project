'use strict';
const sequelize = require('./sequelize_index').sequelize;
const User = require('./User')
const Cart = require('./Cart');
const Order = require('./Order');
const Product = require('./Product');
const OrderProduct = require('./OrderProduct');
const ProductOrder = require('./ProductOrder')

// Association One-To-Many (User-Cart-Table)
User.hasMany(Cart,{
    foreignkey:'user_id',
    as : 'cartInfo'
});

Cart.belongsTo(User,{foreignkey:"user_id", as:'userInfo'});

// Association One-To-Many (Cart-Product-Table)
Cart.hasMany(Product,{foreignkey:"user_id"});
Product.belongsTo(Cart,{foreignkey:"user_id"});


// Association One-To-Many (User-Order-Table)
User.hasMany(Order,{foreignkey:"user_id"});
Order.belongsTo(User,{foreignkey:"user_id"});


// Association Many-To-Many (Order-OrderProduct-Table)
Order.belongsToMany(OrderProduct, { through: ProductOrder });
OrderProduct.belongsToMany(Order, { through: ProductOrder });

// Association Many-To-Many (Product-OrderProduct-Table)
Product.belongsToMany(OrderProduct, { through: ProductOrder});
OrderProduct.belongsToMany(Product, { through: ProductOrder });


sequelize.sync({force: false}).then(function () {
    console.log("Database Configured");
});
module.exports = {User, Cart};





