const {getAllcategories, addCategorie ,delCategorie} = require('../model/categoriesModel')

const getCategories = async (req,res) => {
    const x= await getAllcategories()
    try{
        res.send(x)
    }
    catch(err){
   console.log(err);
    }
}

const addNewCategorie =async (req,res) => {
    const x=await addCategorie(req.body)
    try{
        res.send(x)
    }
    catch(err){
        console.log(err);
    }
}

const deleteCategorie =async(req,res)=>{
    const x= await delCategorie(req.params.id)
    try{
        res.send("deleted")
    }
    catch(err){
console.log(err);
    }
}
module.exports={getCategories, addNewCategorie, deleteCategorie}