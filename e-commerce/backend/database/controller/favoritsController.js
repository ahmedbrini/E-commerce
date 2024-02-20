const favoritModel = require('../model/favoritModel')

const likeProduct = (req, res) => {
    const {product, userIduser} =req.body
    favoritModel.addFav({
        product: product,
        userIduser: userIduser
    })
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const getWhislist = (req, res) => {
    const id = req.params.id
    favoritModel.getAll(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const removeone = (req, res) => {
    const id = req.params.id
    favoritModel.deletOne(id)
    .then((result)=>{
        res.status(203).json('deleted')
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

module.exports = {likeProduct, getWhislist, removeone}