const express = require("express")
const data=require("./controllers/foodapi")

const app = express()

app.use(express.json())

app.use("/",data)

module.exports=app