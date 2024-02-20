const router = require('express').Router()
const controller = require('../database/controller/categoriesController')


router.get('/getcategories', controller.getCategories)

router.post('/addcategorie',controller.addNewCategorie)

router.delete('/deletecategorie/:id',controller.deleteCategorie)

module.exports = router