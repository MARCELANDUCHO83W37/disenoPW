const colores = document.querySelectorAll('.color');

colores.forEach(color => {
    color.addEventListener('click', () => {
        document.body.style.backgroundColor = color.style.backgroundColor;
    });
});

let tiempoRestante = 60;
const temporizadorElemento = document.getElementById('temporizador');

const temporizador = setInterval(() => {
    tiempoRestante--;
    temporizadorElemento.innerText = `Tiempo restante: ${tiempoRestante} segundos`;
    if (tiempoRestante <= 0) {
        clearInterval(temporizador);
        alert('Tiempo agotado');
        window.close();
    }
}, 1000);
