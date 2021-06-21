const mongoose = require("mongoose")

const schema = mongoose.Schema({
    fristname: String,
    lastname: String,
    email: String,
    password: String,
    typeOfStudy: String,
    religion: String,
    phone: String,
    address: String,
    state: String,
    military: String,
    img: String,
    certification: String,
    document: String
},{
    versionKey: false // You should be aware of the outcome after set to false
})

 
module.exports = mongoose.model("temp", schema)