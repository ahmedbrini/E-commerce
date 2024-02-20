const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Cart = sequelize.define('cart', {
  idcart: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'cart',
  timestamps: false
});

module.exports = {Cart}