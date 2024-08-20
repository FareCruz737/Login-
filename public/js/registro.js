

const enviar = document.getElementById('button_enviar'); 

enviar.addEventListener('click', (e) => {
e.preventDefault()

const info = {
nombre: document.getElementById('Nombre').value,
apellido: document.getElementById('apellido').value,
email: document.getElementById('gmail2').value,
password: document.getElementById('password2').value
}
const data = JSON.stringify(info); 

console.log(data)

fetch('http://localhost:3000/meta/login_up', {
method: 'post', 
headers:{ 'Content-Type':'application/json'}, 
body: data

}); 

})