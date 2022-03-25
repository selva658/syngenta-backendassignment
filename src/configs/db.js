const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://selva658:selva100_@cluster0.fowgx.mongodb.net/sygentafoodapi")
}

module.exports=connect