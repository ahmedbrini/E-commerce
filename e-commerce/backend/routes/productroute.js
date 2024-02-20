const router = require('express').Router()
const controller=require('../database/controller/ProductController')

router.get('/getall', controller.getAll)
router.get('/getall/:id',controller.getallpro)
router.post('/addpro/:id',controller.addpro)
router.put('/editpro/:id',controller.updateProduct)
router.delete('/delpro/:id',controller.deletedProduct)


module.exports=router