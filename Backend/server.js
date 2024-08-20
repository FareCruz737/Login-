const { Router }= require('express');
const model = require('./model/model.js')
// const dta = require('./model/enviar.js')
const path = require('path')
const {SignJWT, jwtVerify} = require('jose');



const server = Router(); 
const secreto = new TextEncoder()

server.get('/login', (req, res) => {
res.sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html' ));
})


server.post('/login_up', async (req, res) => {
const {nombre, apellido, email, password} = req.body; 

if(!nombre || !apellido || !email || !password) return res.status(403).send('Faltan datos'); 

const find = await model.findOne({email: email})

if(find) return res.status(409).send('Ya existe este usuario'); 

const guardar = new model({nombre:nombre, apellido:apellido, email:email, clave:password}); 
await guardar.save()

})


server.post('/data', async (req,res) => {
const {email, password} = req.body; 

if(!email || !password) return res.status(403).send('Algo estuvo mal'); 

const find = await model.findOne({email})
if(!find) return res.status(404).send('Usuario no existente'); 

const data = await new SignJWT({email})
.setProtectedHeader({alg: 'HS256', typ: 'JWT'})
.setIssuedAt()
.setExpirationTime('1h')
.sign(secreto.encode('hola')); 



res.cookie('token', data, {
maxAge: 10000,
httpOnly: true,
secure: false,  // Cambia esto a true en producción con HTTPS
sameSite: 'lax' // Puedes probar 'none' si tienes problemas
});



res.send({redirect: 'http://localhost:3000/meta/very'})

})


server.get('/very', async (req, res) => {
const token = req.cookies.token; 

if(!token) {return res.status(404).send('Lo lamento pero no hay token')} 

await jwtVerify(token,secreto.encode('hola'))

res.sendFile(path.join(__dirname, '..', 'public', 'html', 'Welcom.html'))
})


server.get('/very', async (req, res) =>{
    const token = req.cookies.token
    
    if(!token) {return res.status(404).send('Lo lamento pero no hay token')} 
    
     const {payload} = await jwtVerify(token,secreto.encode('hola'))
    
    const email = payload.email; 
    
    const find = await model.findOne({email: email})
     
    if(!email){
    res.status(404).send('Gmail no encontrado')
    }
    console.log(find)      
})



module.exports = server