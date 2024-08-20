

var caja = document.getElementById('mover'); 
var cosa = document.getElementById('button_mover')


let activo = true; // Estado inicial

cosa.addEventListener('click', () => {
    if (activo) {
       caja.style.left= '299px'; 
       caja.style.borderRadius = '40px 0px 0px 40px';
       cosa.textContent = 'Ya tengo cuenta'
      
    }else{
       caja.style.left = '799px'; 
       caja.style.borderRadius = '0px 40px 40px 0px'; 
       cosa.textContent ='Registrarse'
      
    }

activo =!activo
   console.log(activo)
});

// 888px