// Simulador de Carrito 

class Libros {
    constructor(nombre, tapa, imgSrc ,precio) {
        this.nombre = nombre
        this.tapa = tapa
        this.imgSrc = imgSrc
        this.precio = precio
    }
}

const libros1 = new Libros('Mafalda', "Hardbook", " ./assets/images/libro1.jpg" , 5.076 )
const libros2 = new Libros('Berserk Volume 1', "Paperbook"," ./assets/images/libro2.jpg" ,2.221)
const libros3 = new Libros('World of Warcraft', "Hardbook"," ./assets/images/libro3.jpg" ,1.908 )


const productos = [libros1, libros2, libros3]

let carrito = []

const cardContainer = document.querySelector('#cardContainer')

// const cardContainer = document.getElementById('cardContainer')

productos.forEach((producto) =>{
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
            <h3 class="cardTitle"> Libro ${producto.nombre} </h3>
            <img src="${producto.imgSrc}" class="cardImg">
            <p class="cardDesc"> tipo de tapa ${producto.tapa} </p>
            <span class="cardPrice"> $${producto.precio} </span>
            <button data-id="${producto.nombre}" class="buttonCTA"> Agregar al Carrito </button>
        `
    cardContainer.append(card)
})

const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('data-id')
    const producto = productos.find((producto) => producto.nombre ==  productoElegido)
    carrito.push(producto)
    console.log(carrito)
}

const botonesCompra = document.querySelectorAll('.buttonCTA')
botonesCompra.forEach((botonCompra) => {
    botonCompra.addEventListener('click', agregarProducto)
})



































































/*
class Libros {
    constructor(nombre, tapa, precio) {
        this.nombre = nombre
        this.tapa = tapa
        this.precio = precio
    }
}

const libros1 = new Libros('Mafalda', "Hardbook", 5.076)
const libros2 = new Libros('Berserk Volume 1', "Paperbook", 2.221, 91)
const libros3 = new Libros('World of Warcraft', "Hardbook", 1.908, 14)

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
const librosop = [{
        nombre: 'mafalda'
    },
    {
        nombre: 'berserk'
    },
    {
        nombre: 'world of warcraft'
    },
]




alert("bienvenidos a Paper Factory Sale")

alert("Le mostraremos los productos que tenemos hoy para ofrecerle")

alert('Elegi un libro entre: \n Mafalda \n Berserk \n World of Warcraft')

const agregarProducto = () => {

    let libroDisponible = true;

    while (libroDisponible) {
        const ingresaUsuario = prompt('busque su libro:').toLowerCase()

        productoElegido = librosop.filter((libritos) => libritos.nombre.includes(ingresaUsuario))
        if (productoElegido.length > 0) {
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


        } else {
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

alert("Muchas Gracias por su Compra")

*/
