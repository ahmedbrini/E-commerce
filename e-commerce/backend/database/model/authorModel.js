const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Authorization = sequelize.define('authorization', {
  idauthorization: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'authorization',
  timestamps: false
})

const addToken = (token) => {
  return Authorization.create(token)
}

const getToken = (id) => {
  return Authorization.findOne({where: {userIduser: id}})
}

const deleteToken = (id) => {
  return Authorization.destroy({where: {userIduser: id}})
}

module.exports = {Authorization, addToken, getToken, deleteToken}