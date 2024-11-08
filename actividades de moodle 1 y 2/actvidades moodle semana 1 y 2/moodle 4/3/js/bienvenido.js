
window.onload = function() {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = "Bienvenido"; 
};


window.onbeforeunload = function(event) {

    const confirmationMessage = "¿Estás seguro de que deseas salir?";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
};

window.onunload = function() {
    alert("Adiós");
};
