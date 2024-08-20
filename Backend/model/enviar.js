const mongoose = require('mongoose'); 

const firt = mongoose.Schema({
nombre:String, 
apellido:String,
email: String, 
clave: String
})

const dta = mongoose.model('personas', firt); 

module.exports = dta