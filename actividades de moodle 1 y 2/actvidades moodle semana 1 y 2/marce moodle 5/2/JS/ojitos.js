document.addEventListener("DOMContentLoaded", () => {
    const pupilas = document.querySelectorAll('.pupila');

    document.addEventListener('mousemove', (event) => {
        const { clientX: x, clientY: y } = event;
        pupilas.forEach(pupila => {
            const rect = pupila.parentElement.getBoundingClientRect();
            const dx = x - (rect.left + rect.width / 2);
            const dy = y - (rect.top + rect.height / 2);
            const angle = Math.atan2(dy, dx);
            pupila.style.transform = `translate(${Math.cos(angle) * 10}px, ${Math.sin(angle) * 10}px)`;
        });
    });

    function actualizarFechaHora() {
        const ahora = new Date();
        document.getElementById('fechaHora').innerText = ahora.toLocaleString();
    }
    setInterval(actualizarFechaHora, 1000);
});
