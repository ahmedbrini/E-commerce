const router = require('express').Router()
const controller = require('../database/controller/authorController')

router.get('/get/:id', controller.checkToken)

router.post('/add/:id', controller.saveToken)

router.delete('/delete/:id', controller.destroyToken)

module.exports = router