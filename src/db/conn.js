const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect((process.env.MONGO_URL), {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log('Connection Successfull with Database');
}).catch((err)=>{
    console.log('No Connection');
})