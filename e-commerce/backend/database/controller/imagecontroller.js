const {addImage,getAllIm} = require('../model/imagesModel')

const saveImages = (req, res) => {
    const id = req.params.id
    const images = req.body.image
    try{
        images.map( e=>{
            addImage({productIdproducts: id, image: e.uploadInfo.secure_url})
        })
        res.status(201).json('images added')
    }
    catch(err){
        res.status(500).send(err)
    }
}
const getallImage = async(req,res)=>{
    const id=req.params.id
        await getAllIm(id).then((result)=>{
    res.status(200).json(result)
    }).catch((err)=>{
    res.status(500).json(err)
    })
    }




module.exports = {saveImages,getallImage}