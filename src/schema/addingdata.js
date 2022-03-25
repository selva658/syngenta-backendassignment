const mongoose = require("mongoose")

const adddata = new mongoose.Schema({
    restaurantname: { type: String, required: true },
    location: { type: String, required: true },
    category:[]
},
{
    versionKey: false,
    timestamps:true
})

const Add = mongoose.model("data", adddata)

module.exports=Add