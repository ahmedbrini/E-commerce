const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Reviews = sequelize.define('reviews', {
  idreviews: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  review: DataTypes.INTEGER
}, {
  tableName: 'reviews',
  timestamps: false
})

module.exports = {Reviews}
