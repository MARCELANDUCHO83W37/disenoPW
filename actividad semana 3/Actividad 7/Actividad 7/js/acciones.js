function mostrarDialogo(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const sexo = document.getElementById('sexo').value;
    const profesion = document.getElementById('profesion').value;
    const pasatiempo = document.getElementById('pasatiempo').value;

    const datos = `
        <strong>Datos ingresados:</strong><br>
        Nombre: ${nombre}<br>
        Edad: ${edad}<br>
        Sexo: ${sexo}<br>
        Profesión: ${profesion}<br>
        Pasatiempo: ${pasatiempo}<br><br>
        ¿Son correctos los datos?
    `;
    document.getElementById('datosIngresados').innerHTML = datos;

    // Mostrar el cuadro de diálogo
    document.getElementById('dialogo').style.display = 'block';
}

function confirmarDatos() {
    // Establecer el valor para indicar que se han confirmado los datos
    document.getElementById('confirmado').value = "1";
    document.getElementById('dialogo').style.display = 'none'; // Ocultar el cuadro de diálogo
    document.getElementById('formulario').submit(); // Enviar el formulario
}

function modificarDatos() {
    // Ocultar el cuadro de diálogo sin confirmar los datos
    document.getElementById('dialogo').style.display = 'none';
}
