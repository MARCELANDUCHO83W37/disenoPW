let indice = 0;
        const intervalTime = 3000; // Cambia cada 3 segundos

        function maestra(){
        const imagenes = document.getElementById('imagenes');

        const totalImagenes = imagenes.children.length;
            return totalImagenes;
        }

        function siguiente() {
            indice = (indice + 1) % maestra();
            actualizarCarrusel();
        }

        function anterior() {
            indice = (indice - 1 + maestra()) % maestra();
            actualizarCarrusel();
        }

        function actualizarCarrusel() {
            const desplazamiento = -indice * 100;
            imagenes.style.transform = `translateX(${desplazamiento}%)`;
        }

        function iniciarCarrusel() {
            setInterval(siguiente, 3000);
        }
        // Iniciar el carrusel automáticamente
        iniciarCarrusel();