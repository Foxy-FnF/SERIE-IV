document.getElementById('sumar').addEventListener('click', sumar)

document.getElementById('borrar').addEventListener('click', borrar)
document.addEventListener('DOMContentLoaded', function (event) {

    if (localStorage.getItem('cantidad') != null) {
        document.getElementById('resultado').innerHTML = localStorage.getItem('cantidad')
        }
    })

    function sumar () {

        let cantidad = parseFloat(document.getElementById('cantidad').value)

        if (isNaN(cantidad)) {
        cantidad = 0
        }
        let cantidadAlmacenada = parseFloat(localStorage.getItem('cantidad'))

        if (isNaN(cantidadAlmacenada)) {
        cantidadAlmacenada = 0
        }
    const suma = cantidad + cantidadAlmacenada

    document.getElementById('resultado').innerHTML = suma
    localStorage.setItem('cantidad', suma)
    }


    function borrar () {
        localStorage.setItem('cantidad', 0)
    }
