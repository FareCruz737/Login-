const button = document.getElementById('button'); 


button.addEventListener('click', async (e) => {
e.preventDefault()
let  persona = {
email: document.getElementById('gmail').value, 
password: document.getElementById('password').value 
}
let data = JSON.stringify(persona);

console.log(data)

const tener = await fetch('http://localhost:3000/meta/data', {
method: 'Post', 
headers:{ 'Content-Type':'application/json'}, 
credentials: 'include',
body: data
})

if(!tener.ok) {
console.log('Lo lamento pero algo salio mal'); 
}
const vamos = await tener.json()
if(vamos.redirect){
window.location.href = vamos.redirect; 
}



})