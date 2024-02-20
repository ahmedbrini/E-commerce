const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../index');
const { Image } = require('./imagesModel');
const {Categories}=require("./categoriesModel")
const {Reviews} = require('./reviewModel')

const Products = sequelize.define('products', {
  idproducts: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productName: DataTypes.STRING,
  price: DataTypes.DOUBLE,
  color: DataTypes.STRING,
  size: DataTypes.STRING,
  quantity: DataTypes.INTEGER,
  promotion: DataTypes.INTEGER,
  description: DataTypes.STRING,
  new: DataTypes.BOOLEAN
}, {
  tableName: 'products',
  timestamps: false
})
const getAllproducts = () => {
  return Products.findAll({include: [{model: Image, attributes: ["image"]}, {model: Reviews, attributes: ["review"]}, {model:Categories,attributes:["categoryname"]}]})

}
const getAllProduct=(id)=>{
  return Products.findAll({where: {userIduser:id}})
}
const addproduct=(data)=>{
  return Products.create(data)
}
const editproduct=(data,id)=>{
  return Products.update(data,{where:{idproducts:id}})
}
const deleteProduct=(id)=>{
  return Products.destroy({where :{idproducts:id}})
}

module.exports = {Products,getAllProduct,addproduct,editproduct,deleteProduct
,getAllproducts}