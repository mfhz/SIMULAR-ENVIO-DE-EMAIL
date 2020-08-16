// Variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar= document.querySelector('#enviar');


// Event Listeners

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);
}



// Funciones

function inicioApp() {
    //Deshabilitar el envio
    btnEnviar.disabled = true;

    
}