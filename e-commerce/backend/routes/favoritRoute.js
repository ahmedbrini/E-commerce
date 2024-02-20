const router = require('express').Router()
const controller = require('../database/controller/favoritsController')

router.get('/getall/:id', controller.getWhislist)

router.post('/like', controller.likeProduct)

router.delete('/dislike/:id', controller.removeone)

module.exports = router