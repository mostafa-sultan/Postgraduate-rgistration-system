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
})

 
module.exports = mongoose.model("temp", schema)