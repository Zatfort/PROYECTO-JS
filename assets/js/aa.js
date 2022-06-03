
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

// objectos para la barra de busqueda 
const librosop = [
    {nombre: 'mafalda'},
    {nombre: 'berserk'},
    {nombre: 'world of warcraft'},
]




alert("bienvenidos a Paper Factory Sale")

alert("Le mostraremos los productos que tenemos hoy para ofrecerle")

alert('Elegi un libro entre: \n Mafalda \n Berserk \n World of Warcraft')

const agregarProducto = () => {
    
    let libroDisponible = true;

    while(libroDisponible){
        const ingresaUsuario = prompt('busque su libro:').toLowerCase()
        
        productoElegido = librosop.filter((libritos) => libritos.nombre.includes(ingresaUsuario))
        if(productoElegido.length > 0 ){
            switch (productoElegido[0].nombre) {
                case 'mafalda':
                    mostrarMensaje(libros1)
                    carrito.push(libros1)
                    libroDisponible = false
                    break
                case 'berserk':
                    mostrarMensaje(libros2)
                    carrito.push(libros2)
                    libroDisponible = false
                    break
                case 'world of warcraft':
                    mostrarMensaje(libros3)
                    carrito.push(libros3)
                    libroDisponible = false
                    break
                default:
                        alert('Por favor, ingresa una opcion correcta')
                    break
            }


        }else{
            alert('Por favor, ingresa una opcion correcta')
        }




    }

    

    if (confirm('Desea agregar otro producto?')) {
        agregarProducto()
    } else {
        alert('Finalizo Compra, su total es de $' + totalCarrito())
        console.log(carrito)
    }
}

agregarProducto()

alert ("Muchas Gracias por su Compra")