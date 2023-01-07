const express = require("express");
const router = new express.Router();
const storeapi = require("../models/ecommerce");


router.get('/', async(req,res)=>{
    res.send("Welcome")
})



// Create Products in Api
router.post('/storeapi', async(req,res)=>{
    try{
        const addingrecords = new storeapi(req.body)
        const insertproduct = await addingrecords.save();
        res.status(201).send(insertproduct);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// Get (Read) Products details
router.get('/storeapi', async(req,res)=>{
    try{
        const getproducts = await storeapi.find({}); 
        res.send(getproducts);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// Get (Read) Product details indivitualy
router.get('/storeapi/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const getproduct = await storeapi.findById(_id); 
        res.send(getproduct);
    }
    catch(err){
        res.status(400).send(err);
    }
})

// Update Product
router.patch('/storeapi/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const getproduct = await storeapi.findByIdAndUpdate(_id,req.body,{new:true}); 
        res.send(getproduct);
    }
    catch(err){
        res.status(500).send(err);
    }
})

// Delete Product
router.delete('/storeapi/:id', async(req,res)=>{
    try{
        const getproduct = await storeapi.findByIdAndDelete(req.params.id); 
        res.send(getproduct);
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;