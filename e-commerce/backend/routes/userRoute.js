const router = require('express').Router()
const controller = require('../database/controller/userController')

router.post('/signup', controller.signUp)

router.post('/signin', controller.signIn)

router.put('/edit/:id', controller.updateUser)

router.delete('/delete/:id', controller.destroyUser)

router.get('/getallusers',controller.getusers)

router.get('/getclients',controller.getClients)

router.get('/getsellers',controller.getSellers)

module.exports = router