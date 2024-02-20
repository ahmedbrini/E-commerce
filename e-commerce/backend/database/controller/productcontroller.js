const{getAllProduct,addproduct,editproduct,deleteProduct, getAllproducts}=require('../model/productModel')
const {addCategorie} = require('../model/categoriesModel')

const getAll = (req, res) => {
    getAllproducts()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const getallpro = async(req,res)=>{
const id=req.params.id
    await getAllProduct(id).then((result)=>{
res.status(200).json(result)
}).catch((err)=>{
res.status(500).json(err)
})
}
const addpro=async(req,res)=>{
    const id = req.params.id
    const {productName,price,color,size,quantity,promotion,description,New,categoryname } =req.body
    await addproduct({productName:productName,price:price,color:color,size:size,quantity:quantity,promotion:promotion,description:description,new:New, userIduser: id}).then((result)=>{
        addCategorie({categoryname: categoryname, productIdproducts: 10})
        .then(()=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.send(err)
        })
    }).catch((err)=>{
        res.status(500).json(err)
    })
}
const updateProduct=async(req,res)=>{
    const {productName,price,color,size,quantity,promotion,description,New,userIduser } =req.body
    const id=req.params.id
    await editproduct({productName:productName,price:price,color:color,size:size,quantity:quantity,promotion:promotion,description:description,new:New},id).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}
const deletedProduct=async(req,res)=>{
    const id=req.params.id
    await deleteProduct(id).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err)
    })
}



module.exports = {getallpro,addpro,updateProduct,deletedProduct,getAll}