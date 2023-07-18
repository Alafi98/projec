document.getElementById('btn-registrarse').addEventListener('click', register);
document.getElementById('btn-iniciar__sesion').addEventListener('click', iniciarSesion);
window.addEventListener('resize', anchoPagina);
//Declaracion de variables

var contentLogin = document.querySelector('.content-login');
var formularioLogin = document.querySelector('#login-form');
var formularioRegister = document.querySelector('#register-form');
var backBoxLogin = document.querySelector('.back-box__Login');
var backBoxRegister = document.querySelector('.back-box__register');

function anchoPagina() {
  if(window.innerWidth > 850) {
      backBoxLogin.style.display = 'block';
      backBoxRegister.style.display = 'block';
  }else{
    backBoxRegister.style.display = 'block';
    backBoxRegister.style.opacity = '1';
    backBoxLogin.style.display = 'none';
    formularioLogin.style.display = 'block';
    formularioRegister.style.display = 'none';
    contentLogin.style.left = '0px';
  }

}

anchoPagina();


function iniciarSesion() {

  if (window.innerWidth > 850) {
    formularioRegister.style.display = 'none';
    contentLogin.style.left = '10px';
    formularioLogin.style.display = 'block';
    backBoxRegister.style.opacity = '1';
    backBoxLogin.style.opacity= '0';


  }else {
    formularioRegister.style.display = 'none';
    contentLogin.style.left = '0px';
    formularioLogin.style.display = 'block';
    backBoxRegister.style.display = 'block';
    backBoxLogin.style.display= 'none';

  }
}

function register() {
  if (window.innerWidth > 850) {
    formularioRegister.style.display = 'block';
    contentLogin.style.left = '410px';
    formularioLogin.style.display = 'none';
    backBoxRegister.style.opacity = '0';
    backBoxLogin.style.opacity= '1';
  }else{
    formularioRegister.style.display = 'block';
    contentLogin.style.left = '0px';
    formularioLogin.style.display = 'none';
    backBoxRegister.style.display = 'none';
    backBoxLogin.style.display = 'block';
    backBoxLogin.style.opacity = '1';
  }

}


// Mostrar inicio de sesion


var loginButton = document.getElementsByClassName('login-button')[0];
var registerButton = document.getElementsByClassName('registro')[0];
var btnSalir = document.getElementsByClassName('btn-salir')[0];
var loginForm = document.getElementById('login-Register__Form');
var fondoDifuminado = document.getElementsByClassName('overlay')[0];


loginButton.addEventListener('click', () => {
  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
  } else if (loginForm.style.display === 'block') {
    loginForm.style.display = 'none';
  } 
});
registerButton.addEventListener('click', () => {
  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
  } else if (loginForm.style.display === 'block') {
    loginForm.style.display = 'none';
  } 
});


loginButton.addEventListener('click', () => {
  if (fondoDifuminado.style.display === 'none') {
    fondoDifuminado.style.display = 'block';
  } else if (fondoDifuminado.style.display === 'block') {
    fondoDifuminado.style.display = 'none';
  } 
});
registerButton.addEventListener('click', () => {
  if (fondoDifuminado.style.display === 'none') {
    fondoDifuminado.style.display = 'block';
  } else if (fondoDifuminado.style.display === 'block') {
    fondoDifuminado.style.display = 'none';
  } 
});






btnSalir.addEventListener('click', () => { 
  if (loginForm.style.display === 'block') {
  loginForm.style.display = 'none';
  }
});

btnSalir.addEventListener('click', () => { 
  if (fondoDifuminado.style.display === 'block') {
  fondoDifuminado.style.display = 'none';
  }
});



const categoryButtons = document.querySelectorAll(".menu-desplegable li a");

categoryButtons.forEach((button) => {
  button.addEventListener("click", function(event) {
    const subCategories = this.nextElementSibling;
    if (subCategories) {
      event.preventDefault();
      if (subCategories.style.display === "block") {
        subCategories.style.display = "none";
      } else {
        subCategories.style.display = "block";
      }
    }
  });
});

const btnCategorias = document.querySelector('.categoria');
const menuDesplegable = document.querySelector('.menu-desplegable');

// Mostrar el menú desplegable al hacer clic en el botón Categorías
btnCategorias.addEventListener('click', () => {
  // Verificar si el menú desplegable ya está visible
  if (menuDesplegable.classList.contains('menu-desplegable--visible')) {
    // Si ya está visible, ocultarlo cambiando la clase
    menuDesplegable.classList.remove('menu-desplegable--visible');
  } else {
    // Si no está visible, mostrarlo cambiando la clase
    menuDesplegable.classList.add('menu-desplegable--visible');
  }
});