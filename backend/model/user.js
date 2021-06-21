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
    military: String 
})

module.exports = mongoose.model("user", schema)