const { DataTypes, where } = require('sequelize')
const sequelize = require('../index')

const Categories = sequelize.define('categories', {
  idcategories: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoryname: DataTypes.STRING
}, {
  tableName: 'categories',
  timestamps: false
})

const getAllcategories=()=>{
  return Categories.findAll()
}

const addCategorie=(add)=>{
  return Categories.create(add)
}

const delCategorie=(id)=>{
  return Categories.destroy({where:{idcategories:id}})
} 


module.exports = {Categories, getAllcategories , addCategorie, delCategorie}