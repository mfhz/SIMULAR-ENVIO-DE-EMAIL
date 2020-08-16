// Variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar= document.querySelector('#enviar');


// Event Listeners

eventListeners();

function eventListeners() {
    //Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo)
    asunto.addEventListener('blur', validarCampo)
    mensaje.addEventListener('blur', validarCampo)

}



// Funciones

function inicioApp() {
    //Deshabilitar el envio
    btnEnviar.disabled = true;

    
}

/// Valida que el campo tenga algo escrito
function validarCampo() {
    // console.log('dentro del Input');

    // Se valida la longitud del texto y que no esté vacio
    validarLongitud(this);
    // console.log(this);

    

    let errores = document.querySelectorAll('.error');
    if (email.value != '' && asunto.value != '' && mensaje.value != '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;            
        } 
    } else {
        btnEnviar.disabled = true;           
    }

}

function validarLongitud(campo) {
    // console.log(campo);
    // console.log(campo.value.length);
    if (campo.value.length > 0) {
        // console.log('SI');
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        // console.log('NO');
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}