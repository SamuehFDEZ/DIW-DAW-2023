window.onload = () => {
    const imagenes = document.getElementsByClassName("imagen");
    const bordeAimagenes = document.getElementsByClassName("bordeImagen");

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", () => {
            // Eliminar la clase 'verde' de todas las imágenes
            for (let j = 0; j < bordeAimagenes.length; j++) {
                bordeAimagenes[j].classList.remove("verde");
            }

            // Agregar la clase 'verde' solo a la imagen clicada
            bordeAimagenes[i].classList.add("verde");
        });
    }
}
