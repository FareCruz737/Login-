const mongoose = require('mongoose'); 

const firt = mongoose.Schema({
nombre: String, 
apellido: String,
email: String, 
clave: String
})

const model = mongoose.model('personas', firt); 

module.exports = model