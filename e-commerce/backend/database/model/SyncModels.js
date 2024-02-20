const sequelize = require('../index')

const {Authorization} = require('./authorModel')
const {Block} = require('./blockModel')
const {Cart} = require('./cartModel')
const {Categories} = require('./categoriesModel')
const {Favorit} = require('./favoritModel')
const {Products} = require('./productModel')
const {Reviews} = require('./reviewModel')
const {User} = require('./userModel')
const {Image} = require('./imagesModel')

User.hasOne(Authorization);
User.hasOne(Cart)
User.hasOne(Favorit)
User.hasMany(Block)
User.hasMany(Products)
User.hasMany(Reviews)

Reviews.belongsTo(Products);
Reviews.belongsTo(User);

Products.belongsTo(User)
Products.belongsTo(Cart)
Products.belongsTo(Favorit)
Products.hasMany(Reviews)
Products.hasMany(Categories)
Products.hasMany(Image)

Favorit.belongsTo(User)
Favorit.hasMany(Products)

Categories.belongsTo(Products);

Cart.belongsTo(User)
Cart.hasMany(Products)

Block.belongsTo(User);

Authorization.belongsTo(User)

sequelize.sync()