
class Libroso {
    constructor(nombre, tapa, precio) {
        this.nombre = nombre;
        this.tapa = tapa;
        this.precio = precio;
    }
};

const libros1 = new Libroso('Mafalda', "Hardbook", 5.076)
const libros2 = new Libroso('Berserk Volume 1', "Paperbook", 2.221, 91)
const libros3 = new Libroso('World of Warcraft', "blanbook", 1.908, 14)


const carrito = [];  
const mensaje = (libroElegido) => {
    switch (libroElegido) {
        case "mafalda":
            console.log(libros1.nombre `Agregado al carrito`);
            break;
        case "berserk":
            console.log(libros2.nombre `Agregado al carrito`);
            break;
        case "world of warcraft":
            console.log(libros3.nombre `Agregado al carrito`);
            break;
        default:
            break;
    }
}; //---> SOLO CUMPLE LA FUNCION DE MOSTRAR UN MENSAJE QUE DICE QUE FUE AGREGADO "X" PEDAL AL CARRITO

const totalCarrito = () => {
    let sumaTotal = 0;
    carrito.forEach((producto) => {
        sumaTotal += producto.precio;
    });
    return sumaTotal;
};





const libros = [
    libroMafalda,
    libroBerserk,
    libroWorldofwarcraft,
];



function agregarlibro() {
    const libroElegido = prompt(`Elija su libro: mafalda berserk world of warcraft `);
    if (libroElegido != null) {
        mensaje(libroElegido);

        switch (libroElegido) {
            case "mafalda":
                carrito.push(libroMafalda);
                break;
            case "berserk":
                carrito.push(libroBerserk);
                break;
            case "world of warcraft":
                carrito.push(libroWorldofwarcraft);
                break;
            default:
                alert("ASEGURESE DE HABER ESCRITO CORRECTAMENTE EL NOMBRE DEL LIBRO");
                break;

        }



        let continuar = confirm("¿DESEA AGREGAR OTRO LIBRO A SU COMPRA?");
        if (continuar) {
            agregarlibro();
        } else {
            console.log(`Total a abonar $${totalCarrito()}`);
        }

    } else {
        let buscar = prompt('si no sabes que libro elegir ,puedes buscar por su tipo de tapa (prueba con "hardbook"-"paperbook")');

        if (buscar != null) {
            const buscarTapa = libros.filter((libroso) => libroso.tapa.includes(buscar));

            if (buscarTapa.length > 1) {
                if (confirm(`Te podria interesar nuestro ${(buscarTapa[0].nombre).toUpperCase()} o nuestro ${(buscarTapa[1].nombre).toUpperCase()} agregralo al carrito`)) {
                    agregarlibro();
                } else {
                    alert("gracias por su visita");
                }
            } else {
                if ((confirm(`Te podria interesar nuestro ${(buscarTapa[0].nombre).toUpperCase()} agregalo al carrito `))) {
                    agregarlibro();
                } else {
                    alert("gracias por su visita");
                }
            }
        } else {
            alert("gracias por su visita");
        }

    };
}

agregarlibro();




























/*



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
    {nombre: "Mafalda"},
    {nombre: "berserk"},
    {nombre: "world of warcraft "},
]




alert("bienvenidos a Paper Factory Sale")

alert("Le mostraremos los productos que tenemos hoy para ofrecerle")

const agregarProducto = () => {
    const productoElegido = prompt('Elegi un libro entre: \n Mafalda \n Berserk \n World of Warcraft').toLowerCase()

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

alert ("Muchas Gracias por su Compra")
*/