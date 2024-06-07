

const sumbitFunction = (event) =>{
    if(!validarFormulario()){
        event.preventDefault();
    }else {
        event.preventDefault();

        alert(

            'Los datos enviados fueron: \n' +
            'Nombre: '+ document.getElementById('nombre').value + '\n' +
            'Apellido: '+ document.getElementById('apellido').value + '\n' +
            'Documento: '+ document.getElementById('documento').value + '\n' +
            'Email: '+ document.getElementById('email').value + '\n' +
            'Edad: '+ document.getElementById('edad').value + '\n' +
            'Actividad: '+ document.getElementById('actividad').value + '\n' +
            'Nivel de Estudio: '+ document.getElementById('nivelEstudio').value + '\n' 
        )
    }

}

document.getElementById('formulario').addEventListener('submit', sumbitFunction)  //escucha el envio del formulario

function validarFormulario(){
        const campoTexto = document.querySelectorAll('input[type="text"]');
        let validacionCorrecta = true;
        
        // Esto valida el campo texto
        campoTexto.forEach(campo => {
            let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))  //error + Zid con la primera letra en mayuscula
            if(campo.value.length == ''){
                 mostrarError(errorCampo, '¡Este campo es requerido!')
                 validacionCorrecta = false
            }else if (campo.value.length > 0 && campo.value.length < 3){
                mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!')
                validacionCorrecta = false
            }else {
                ocultarError(errorCampo)
            }


        })
        // Esto valida el campo email
        const email = document.getElementById('email');
        let errorEmail = document.getElementById('errorEmail')

        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
            ocultarError(errorEmail);
        }else {
            mostrarError(errorEmail, '¡Ingrese un correo electronico valido!')
        }

        // validacion del campo edad
        const edad = document.getElementById('edad');
        const errorEdad = document.getElementById('errorEdad');

        if(edad.value < 18){
            mostrarError(errorEdad, '¡Debes ser mayor de 18 años para registrarte!')
            validacionCorrecta = false
        }else {
            ocultarError(errorEdad);
        }

        //Validacion de la actividad

        const actividad = document.getElementById('actividad');
        const errorActividad = document.getElementById('errorActividad');

        if(actividad.value == ''){
            mostrarError(errorActividad, '¡Por favor, selecciona una actividad IMBECIL!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorActividad);
        }

        //Validacion de Nivel de Estudio
        const nivelEstudio = document.getElementById('nivelEstudio');
        const errorNivelEstudio = document.getElementById('errorNivelEstudio');

        if(nivelEstudio.value == ''){
            mostrarError(errorNivelEstudio, '¡Por favor, selecciona un Nivel de Estudio!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorNivelEstudio);
        }

        //Validar los terms y conditions

        const aceptoTerminos = document.getElementById('aceptoTerminos');
        const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

        if(!aceptoTerminos.checked){
            mostrarError(aceptoTerminos, '¡Debes aceptar los terminos y condiciones!')
            validacionCorrecta = false;
        } else {
            ocultarError(errorAceptoTerminos);
        }
        
        return validacionCorrecta;//esto dira si el form completo es valido

    }




const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}
