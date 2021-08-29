// --- START --- : Clases de tipo Lista

class Lista {          
    listaProductos = [];

    agregarProducto(producto) {
        this.listaProductos.push(producto);
    }

    // buscarProducto();

    // modificarProducto();
}

class Stock extends Lista {
    buscarProducto() {
        //...
    }

    modificarProducto() {
        //...
    }

    actualizarStock() {
        //...
    }

    mostrarStock() {
        //...
    }
}

class Carrito extends Lista {

    buscarProducto() {
        //...
    }

    modificarProducto() {
        //...
    }

    quitarProducto() {
        //...
    }
}


// --- START --- : Clases de Tipo productos

class Producto {
    #id;
    nombre;
    costo;
    cantidad;
    static #ultimoId = 0;

    constructor(nombre, costo, cantidad) {
        Producto.#ultimoId += 1;
        this.#id = Producto.#ultimoId;
        this.nombre = nombre;
        this.costo = costo;
        this.cantidad = cantidad;
    }

    get id() {
        return this.#id;
    }

    set costo(costo) {
        if (costo > 0) {
            this.costo = costo;
        } else {
            console.log("Valor para el costo incorrecto");
        }
    }

    set cantidad(cantidad) {
        if (cantidad > 0) {
            this.cantidad = cantidad;
        } else {
            console.log("Valor para la cantidad incorrecto");
        }
    }

}

class ProductoLineaBlanca extends Producto {
    dimensiones;

    constructor(nombre, costo, cantidad, dimensiones) {
        super(nombre, costo, cantidad);
        this.dimensiones = dimensiones;
    }
}

class ProductoPerecedero extends Producto {
    fechaCaducidad;

    constructor(nombre, costo, cantidad, fechaCaducidad) {
        super(nombre, costo, cantidad);
        this.fecha = fechaCaducidad;
    }
    
    set fecha(fecha) {
        let fechaArr = fecha.split("/");
        if (fechaArr.length == 3) {
            let fechaParse = Date.parse(`${fechaArr[1]}/${fechaArr[0]}/${fechaArr[2]}`);
            if (isNaN(fechaParse)) {
                console.log("Fecha Invalida");
            } else {
                if (fechaParse - Date.now() > 0) {
                    this.fechaCaducidad = fecha;
                } else {
                    console.log("Este producto ya vencio!");
                }
            }
        } else {
            console.log("Fecha Invalida");
        }
    }
}

class ProductoPerecederoRefrigeracion extends ProductoPerecedero {
    tipoRefrigeracion;

    constructor(nombre, costo, cantidad, fechaCaducidad, tipoRefrigeracion) {
        super(nombre, costo, cantidad, fechaCaducidad);
        this.tipoRefrigeracion = tipoRefrigeracion;
    }
}


// --- START --- : Clases Auxiliares

class Dimensiones {
    alto;
    ancho;
    profundidad;

    constructor(alto, ancho, profundidad) {
        this.alto = alto;
        this.ancho = ancho;
        this.profundidad = profundidad;
    }

    set alto(medida) {
        if (medida > 0) {
            this.alto = medida;
        } else {
            console.log("La medida es invalida");
        }
    }

    set ancho(medida) {
        if (medida > 0) {
            this.ancho = medida;
        } else {
            console.log("La medida es invalida");
        }
    }

    set profundidad(medida) {
        if (medida > 0) {
            this.profundidad = medida;
        } else {
            console.log("La medida es invalida");
        }
    }

    imprimirDimensiones() {
        return this.alto + "x" + this.ancho + "x" + this.profundidad;
    }
}

// --- START --- : Programa

