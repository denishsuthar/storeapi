const express = require("express");
const router = require("./routers/product");
require("../src/db/conn");


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router)


app.listen(port, () =>{
    console.log(`Done at port no. ${port}`)
})