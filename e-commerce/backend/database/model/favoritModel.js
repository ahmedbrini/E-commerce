const { DataTypes } = require('sequelize')
const sequelize = require('../index')

const Favorit = sequelize.define('favorit', {
  idfavorit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product: DataTypes.JSON
}, {
  tableName: 'favorit',
  timestamps: false
})

const addFav = (data) => {
  return Favorit.create(data)
}

const getAll = (id) => {
  return Favorit.findAll({where:{userIduser: id}})
}

const deletOne = (id) => {
  return Favorit.destroy({where:{idfavorit: id}})
}

module.exports = {Favorit, addFav, getAll, deletOne}