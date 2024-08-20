console.clear()
//Limpiar consola
const express = require('express');
const cors = require('cors');
const cookie = require('cookie-parser'); 
const path = require('path'); 
const server = require('./Backend/server.js')
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser')


const app = express(); 
const port = 3000; 
const url = 'mongodb://localhost:27017/personas'; 

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.text()); 
app.use(cors({
origin: 'htpp://localhost:3000/meta/login', 
credentials: true
})); 
app.use(cookie()); 


// Paginas
app.use('/meta', server)


const run = () => {
mongoose.connect(url)
.then(() => console.log(':D'))
.catch((err) => console.log('hay un error', err))

app.listen(port, () => {console.log(`Estamos en ${port}`)})
}

run()

