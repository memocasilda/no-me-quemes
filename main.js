// Seleccionar el elemento con el ID "apagarBtn"
const apagarBtn = document.getElementById('apagarBtn');


// Ahora puedes usar apagarBtn para agregar eventos o manipularlo
apagarBtn.addEventListener('click', () => {
    console.log('El botón apagar fue presionado');
    document.body.classList.toggle("apagado")
    apagarBtn.textContent = document.body.classList.contains("apagado") ? "Encender Luz" : "Apagar Luz"
});