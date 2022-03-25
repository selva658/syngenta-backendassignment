const mongoose = require("mongoose")

const order = new mongoose.Schema({
   orders_id:{type:mongoose.Schema.Types.ObjectId,ref:"data",required:true}

})

const Orderdata = mongoose.model("order", order)

module.exports=Orderdata