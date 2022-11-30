const mongoose = require('mongoose');

const storeschema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    company:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    fetured:{
        type:Boolean,
    },
    image:{
        type:String, formate:"base64",
    },
    description:{
        type:String,
    },
    
})

const storeapi = new mongoose.model('storeapi', storeschema)

module.exports = storeapi;