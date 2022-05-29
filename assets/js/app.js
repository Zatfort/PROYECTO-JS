// Simulador de Carrito

class Libros {
    constructor(nombre, tapa, precio) {
        this.nombre = nombre
        this.tapa = tapa
        this.precio = precio
    }
}

const libros1 = new Libros('Mafalda', "Hardbook", 5.076)
const libros2 = new Libros('Berserk Volume 1', "Paperbook", 2.221,91)
const libros3 = new Libros('World of Warcraft', "Hardbook", 1.908,14)

const carrito = []


const mostrarMensaje = (libro) => {
    alert('El libro ' + libro.nombre + ' cuyo tipo de tapa es ' + libro.tapa + ' cuesta $' + libro.precio)
}


const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((producto) => {
        sumaTotal += producto.precio
    })
    return sumaTotal
}

const agregarProducto = () => {
    const productoElegido = prompt('Elegi un libro entre: Mafalda,Berserk o World of Warcraft').toLowerCase()

    switch (productoElegido) {
        case 'mafalda':
            mostrarMensaje(libros1)
            carrito.push(libros1)
            break
        case 'berserk':
            mostrarMensaje(libros2)
            carrito.push(libros2)
            break
        case 'world of warcraft':
            mostrarMensaje(libros3)
            carrito.push(libros3)
            break
        default:
            alert('Por favor, ingresa una opcion correcta')
            break
    }

    if (confirm('Desea agregar otro producto?')) {
        agregarProducto()
    } else {
        alert('Finalizo Compra, su total es de $' + totalCarrito())
        console.log(carrito)
    }
}

agregarProducto()