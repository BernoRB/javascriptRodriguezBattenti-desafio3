document.getElementById('botonReglas').addEventListener('click', mostrarReglas)

function mostrarReglas() {
    Swal.fire(
        'REGLAS',
        'Al hacer click en INICIAR JUEGO se mostrarán las cartas por unos segundos. Luego tenés que adivinar los pares. Por cada acierto sumás 3 puntos, por cada error restás 1. ¡Buena suerte!',
        'question'
      )
}