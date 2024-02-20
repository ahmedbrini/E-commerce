require("dotenv").config()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const {getOneUser, addUser, editUser, deleteUser,getAll,findClients,findSellers} = require('../model/userModel')
const secretKey = 'mass'
console.log(secretKey)

const signUp = async (req, res) => {
    const {firstName, lastName, emailPhone, password, role} = req.body
    try{
        const pswHashed = await bcrypt.hash(password, 10)
        const result = addUser({
            firstName: firstName,
            lastName: lastName,
            emailPhone: emailPhone,
            password: pswHashed,
            role: role
        })
        res.status(201).json(result)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const signIn = async (req, res) => {
    const {emailPhone, password} = req.body
    try{
        getOneUser(emailPhone)
        .then(async (result)=>{
            if(!!result){
                try{
                    const isMatch = await bcrypt.compare(password, result.password)
                    if(isMatch){
                        const token = jwt.sign({emailPhone: emailPhone}, secretKey)
                        res.status(200).json({msg: 'user found' ,iduser: result.iduser, role: result.role,token})
                    }
                    else{
                        res.status(401).json("wrong email or password")
                    }
                } 
                catch(err){
                    res.status(500).json(err)
                }
            }
            else {
                res.status(404).json('User not found')
              }
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    catch(err){
        res.status(500).json(err)
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const {firstName, lastName, emailPhone, password, role, adresse, image} = req.body
    try{
        const Hashed = await bcrypt.hash(password, 10)
        editUser(id, {
            firstName: firstName,
            lastName:lastName,
            emailPhone: emailPhone,
            password: Hashed,
            role: role,
            adresse: adresse,
            image: image
        })
        res.status(201).json('data updated')
    }
    catch(err){
        res.status(500).json(err)
    }
}

const destroyUser = async (req, res) => {
    const id = req.params.id
    try{
        deleteUser(id)
        res.status(204).send('user deleted successfully')
    }
    catch(err){
        res.status(500).json(err)
    }
}
const getusers = async (req,res) => {
const x= await getAll()
try{
    res.send(x)
}
catch(err){
    console.log(err);
}
}

const getClients = async (req,res) =>{

    const x= await findClients()
    try{
        res.send(x)
    }
    catch(err){
console.log(err);
    }
}

const getSellers = async (req,res) =>{

    const x= await findSellers()
    try{
        res.send(x)
    }
    catch(err){
console.log(err);
    }
}

module.exports = {signUp, signIn, updateUser, destroyUser, getusers, getClients, getSellers}
