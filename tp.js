// --- START --- : Clases de tipo Lista

class Lista {          
    listaProductos = [];

    agregarProducto(producto) {
        this.listaProductos.push(producto);
    }

    agregarProductos(productos) {
        productos.forEach(producto => this.agregarProducto(producto));
    }

    buscarProducto(id) {
        let producto = this.listaProductos.filter(producto => producto.id == id)[0];
        return producto == undefined ? "[-] No se ha podido encontrar el producto buscado" : producto;
    }

    mostrarLista() {
        this.listaProductos.forEach(producto => console.log(producto));
    }
}

class Stock extends Lista {
    listaProductos = [];

    modificarProducto(id, nombre, costo/*, cantidad */) { //Elimino cantidad, por haber redundancia de codigo con actualizarStock() 
        let producto = this.buscarProducto(id);
        if (typeof(producto) == 'string') {
            console.log(producto);
        } else {
            producto.nombreProducto = nombre == '' ? producto.nombreProducto : nombre;
            producto.costoProducto = costo == '' ? producto.costoProducto : costo;
            //producto.cantidad = cantidad == '' ? producto.cantidadProducto : cantidad;
        }
    }
    
    actualizarStock(id, diferenciaStock) {
        let producto = this.buscarProducto(id);
        if (typeof(producto) == 'string') {
            console.log(producto);
        } else {
            /* 
                En vez de que solo se permita reducir la cantidad de artículos, cambio
                el método para que permita toda posibilidad de cambio de stock. Ahora
                son valores positivos para aumentar el stock y valores negativos para
                reducirlo.
            */ 

            if (producto.cantidadProducto + diferenciaStock >= 0 ) {
                producto.cantidadProducto += diferenciaStock;
            } else {
                console.log(producto.cantidadProducto + ", " + diferenciaStock);
                console.log("[-] No hay suficientes artículos");
            }
        }
    }
    
    mostrarStock() {
        this.mostrarLista();
    }
}

class Carrito extends Lista {
    listaProductos = [];

    //@Override
    agregarProducto(productoEnCarrito) {

        if(productoEnCarrito != undefined){
            var elem = this.buscarProducto(productoEnCarrito.prod.id, 0);
            if(elem != undefined){

                if(elem.cantidadAniadida + productoEnCarrito.cantidadAniadida <= productoEnCarrito.prod.cantidadProducto){
                    this.elem.cantidadAniadida += productoEnCarrito.cantidadAniadida;
                }
                else{
                    console.log("[-] No hay suficientes productos disponibles para satisfacer el pedido");
                }
            }
            else if(productoEnCarrito.validarDisponibilidad()){
                this.listaProductos.push(productoEnCarrito);
            }
            else{
                console.log("[-] No hay suficientes productos disponibles para satisfacer el pedido");
            }
        }

    }

    //@Override
    agregarProductos(productosEnCarrito) {

        if(productosEnCarrito != undefined){
            productosEnCarrito.forEach((item) => {
                this.agregarProducto(item);
            });
        }
    }

    //@Override
    buscarProducto(id, flag /* opcional */) {
        let producto = this.listaProductos.filter(producto => producto.prod.id == id)[0];
        return producto == undefined && flag == undefined ? "[-] No se ha podido encontrar el producto buscado" : producto;
    }

    quitarProducto(id, razon /* Opcional */ ) {
        this.listaProductos.forEach( (item) => {

            if(id != undefined && item.prod.id == id){
                
                if(razon === undefined){
                    console.log("Se eliminó el elemento " + item.prod.nombreProducto + " del carrito de compras.");
                }
                else{
                    console.log("Se eliminó el elemento " + item.prod.nombreProducto + " del carrito de compras.\nRazón: " + razon );
                }
                
                this.listaProductos.splice(this.listaProductos.indexOf(item), 1);
            }

        });
    }

    mostrarCarrito() {
        this.mostrarLista();
    }

}

// --- START --- : Clases de Tipo productos

class Producto {
    #id;
    nombreProducto;
    costoProducto;
    cantidadProducto;
    static #ultimoId = 0;

    constructor(nombre, costo, cantidad) {
        Producto.#ultimoId += 1;
        this.#id = Producto.#ultimoId;
        this.nombreProducto = nombre;
        this.costoProducto = costo;
        this.cantidadProducto = cantidad;
    }

    get id() {
        return this.#id;
    }

    set costo(costo) {
        if (costo > 0) {
            this.costoProducto = costo;
        } else {
            console.log("[-] Valor para el costo incorrecto");
        }
    }

    set cantidad(cantidad) {
        if (cantidad > 0) {
            this.cantidadProducto = cantidad;
        } else {
            console.log("[-] Valor para la cantidad incorrecto");
        }
    }
}

class ProductoLineaBlanca extends Producto {
    dimensiones;

    constructor(nombre, costo, cantidad, dimensiones) {
        super(nombre, costo, cantidad);
        this.dimensiones = dimensiones;
    }
    
    get dimensiones() {
        this.dimensiones.imprimirDimensiones();
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
                console.log("[-] Fecha Invalida");
            } else {
                if (fechaParse - Date.now() > 0) {
                    this.fechaCaducidad = fecha;
                } else {
                    console.log("[-] Este producto ya vencio!");
                }
            }
        } else {
            console.log("[-] Fecha Invalida");
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

class ProductoEnCarrito {
    prod;
    cantidadAniadida;

    constructor (prod, cantidadAniadida){
        this.prod = prod;
        this.cantidadAniadida = cantidadAniadida;
    }

    validarDisponibilidad(){
        return this.prod.cantidadProducto >= this.cantidadAniadida;
    }
}

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
            console.log("[-] La medida es invalida");
        }
    }
    
    set ancho(medida) {
        if (medida > 0) {
            this.ancho = medida;
        } else {
            console.log("[-] La medida es invalida");
        }
    }
    
    set profundidad(medida) {
        if (medida > 0) {
            this.profundidad = medida;
        } else {
            console.log("[-] La medida es invalida");
        }
    }
    
    imprimirDimensiones() {
        return this.alto + "x" + this.ancho + "x" + this.profundidad;
    }
}

// --- START --- : Programa


var producto1 = new Producto("Producto 1", 50, 30);
var producto2 = new Producto("Producto 2", 20, 80);
var producto3 = new Producto("Producto 3", 100, 35);
var stock = new Stock();
// stock.agregarProducto(producto1);
// stock.agregarProducto(producto2);
// stock.agregarProducto(producto3);
stock.agregarProductos([producto1, producto2, producto3]);
// stock.modificarProducto(2, "Producto dos", 40, -1);
stock.actualizarStock(3, 5);
stock.actualizarStock(1, 50);
//stock.mostrarStock();
var carrito = new Carrito();
stock.agregarCarrito(carrito);
carrito.agregarProducto(new ProductoEnCarrito(producto2, 10));
stock.actualizarStock(producto2.id, -78);
stock.mostrarStock();
carrito.mostrarCarrito();