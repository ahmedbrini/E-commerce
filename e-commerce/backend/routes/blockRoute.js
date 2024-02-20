const router = require('express').Router()
const controller = require('../database/controller/BlockController')


router.get('/check/:id', controller.checkBlock)

router.post('/addblock',controller.addBlock)

router.get('/getblocked',controller.getallblocked)

router.delete('/delblock/:id',controller.deleteFromblock)

module.exports = router