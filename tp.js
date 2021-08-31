// --- START --- : Clases de tipo Lista

<<<<<<< Updated upstream
/*abstract*/ class Lista{          
    listaProductos;

    /*abstract*/ agregarProducto(producto);

    /*abstract*/ buscarProducto();

    /*abstract*/ modificarProducto();
}

class Stock extends Lista{
=======
class Cliente {
    #id;
    nombre;
    apellido;
    carrito;
    static #ultimoId = 0;
    
    constructor(nombre, apellido) {
        Cliente.#ultimoId += 1;
        this.#id = Cliente.#ultimoId;
        this.nombre = nombre;
        this.apellido = apellido;
        this.carrito = new Carrito();
    }
>>>>>>> Stashed changes
    
    constructor(){
        super();
    }

    agregarProducto(producto){
        //...
    }

    buscarProducto(){
        //...
    }

<<<<<<< Updated upstream
    modificarProducto(){
        //...
=======
    buscarProductoPorId(id) {
        return this.carrito.buscarProducto(id, this.carrito.buscarPorId);
    }

    buscarProductoPorNombre(nombre) {
        return this.carrito.buscarProducto(nombre, this.carrito.buscarPorNombre);
    }

    buscarProductoPorCosto(costo) {
        return this.carrito.buscarProducto(costo, this.carrito.buscarPorCosto);
    }

    buscarProductoPorCantidad(cantidad) {
        return this.carrito.buscarProducto(cantidad, this.carrito.buscarPorCantidad);
>>>>>>> Stashed changes
    }

    actualizarStock(){
        //...
    }

    mostrarStock(){
        //...
    }
}

class Carrito extends Lista{

    agregarProducto(producto){
        //...
    }

<<<<<<< Updated upstream
    buscarProducto(){
        //...
=======
    buscarPorId(producto, idBuscada) {
        return producto.id == idBuscada;
    }

    buscarPorNombre(producto, nombreBuscado) {
        return producto.nombreProducto.includes(nombreBuscado);
    }

    buscarPorCantidad(producto, cantidadBuscada) {
        return producto.cantidadProducto == cantidadBuscada;
    }

    buscarPorCosto(producto, costoBuscado) {
        return producto.costoProducto == costoBuscado;
    }

    buscarProducto(elementoBuscado, callback, flag /* opcional */) {
        let productos = this.listaProductos.filter(producto => callback(producto, elementoBuscado));
        return productos.length == 0 && flag == undefined ? "[-] No se han podido encontrar productos" : productos;
>>>>>>> Stashed changes
    }

    modificarProducto(){
        //...
    }

<<<<<<< Updated upstream
    quitarProducto(){
        //...
=======
    modificarProducto(id, nombre, costo) {
        let producto = this.buscarProducto(id, this.buscarPorId)[0];
        if (typeof(producto) == 'string') {
            console.log(producto);
        } else {
            producto.nombreProducto = nombre == '' ? producto.nombreProducto : nombre;
            producto.costoProducto = costo == '' ? producto.costoProducto : costo;
        }
    }
    
    actualizarStock(id, diferenciaStock) {
        let producto = this.buscarProducto(id, this.buscarPorId)[0];
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
>>>>>>> Stashed changes
    }
}


<<<<<<< Updated upstream
// --- START --- : Clases de Tipo productos
=======
    //@Override
    agregarProducto(productoEnCarrito) {

        if(productoEnCarrito != undefined){
            let elem = this.buscarProducto(productoEnCarrito.prod.id, this.buscarPorId, 0)[0];
            if(elem != undefined){
>>>>>>> Stashed changes

class Producto{
    #id;
    nombre;
    costo;
    cantidad;

    constructor(id, nombre, costo, cantidad){
        this.#id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.cantidad = cantidad;
    }

    get nombre(){
        return this.nombre;
    }
<<<<<<< Updated upstream
    set nombre(nombre){
        this.nombre = nombre;
=======

    // @Override
    buscarProducto(elementoBuscado, callback, flag /* opcional */) {
        let productos = this.listaProductos.filter(producto => callback(producto.prod, elementoBuscado));
        return productos.length == 0 && flag == undefined ? "[-] No se han podido encontrar productos" : productos;
>>>>>>> Stashed changes
    }

    get costo(){
        return this.costo;
    }
    set costo(costo){
        this.costo = costo;
    }

    get cantidad(){
        return this.cantidad;
    }
<<<<<<< Updated upstream
    set cantidad(cantidad){
        this.cantidad = cantidad;
=======

    confirmarCompra (stock) {
        this.listaProductos.forEach(producto => {
            let idProducto = producto.prod.id;
            let cantidadCompra = producto.cantidadAniadida;
            let prodEnStock = stock.buscarProducto(idProducto, stock.buscarPorId)[0];
            if (prodEnStock.cantidadProducto >= cantidadCompra) {
                stock.actualizarStock(idProducto, -cantidadCompra);
            } else {
                console.log(`[-] No puede realizarse la compra del producto "${producto.prod.nombreProducto}" por falta de stock`);
            }
        });
        this.listaProductos = [];
>>>>>>> Stashed changes
    }

}

class ProductoLineaBlanca extends Producto{
    dimensiones;

    constructor(id, nombre, costo, cantidad, dimensiones){
        super(id, nombre, costo, cantidad);
        this.dimensiones = dimensiones;
    }

    get dimensiones(){
        return this.dimensiones;
    }
    set dimensiones(dimensiones){
        this.dimensiones = dimensiones;
    }
}

class ProductoPerecedero extends Producto{
    fechaCaducidad;

    constructor(id, nombre, costo, cantidad, fechaCaducidad){
        super(id, nombre, costo, cantidad);
        this.fechaCaducidad = fechaCaducidad;
    }

    get fechaCaducidad(){
        return this.fechaCaducidad;
    }
    set fechaCaducidad(fecha){
        this.fechaCaducidad = fecha;
    }

}

class ProductoPerecederoRefrigeracion extends ProductoPerecedero{
    tipoRefrigeracion;

    constructor(id, nombre, costo, cantidad, fechaCaducidad, tipoRefrigeracion){
        super(id, nombre, costo, cantidad, fechaCaducidad);
        this.tipoRefrigeracion = tipoRefrigeracion;
    }

    get tipoRefrigeracion(){
        return this.tipoRefrigeracion;
    }
    set tipoRefrigeracion(tipo){
        this.tipoRefrigeracion = tipo;
    }
}


// --- START --- : Clases Auxiliares

class Dimensiones{
    alto;
    ancho;
    profundidad;

    constructor(alto, ancho, profundidad){
        this.alto = alto;
        this.ancho = ancho;
        this.profundidad = profundidad;
    }

    get alto(){
        return this.alto;
    }
    set alto(medida){
        this.alto = medida;
    }

    get ancho(){
        return this.ancho;
    }
    set ancho(medida){
        this.ancho = medida;
    }

    get profundidad(){
        return this.profundidad;
    }
    set profundidad(medida){
        this.profundidad = medida;
    }

    imprimirDimensiones(){
        return this.alto + "x" + this.ancho + "x" + this.profundidad;
    }
}

// --- START --- : Programa

<<<<<<< Updated upstream
=======

let producto1 = new Producto("Producto 1", 50, 30);
let producto2 = new Producto("Producto 2", 20, 80);
let producto3 = new Producto("Producto 3", 100, 35);
let stock = new Stock();
stock.agregarProductos([producto1, producto2, producto3]);
stock.actualizarStock(3, 5);
stock.actualizarStock(1, 50);



let cliente = new Cliente("Juan", "Perez");
cliente.agregarProducto(producto1, 80);
stock.actualizarStock(1, -1);
stock.mostrarStock();
cliente.agregarProducto(producto2, 40);
cliente.verCarrito();
// cliente.comprar(stock);
// cliente.verCarrito();
// stock.mostrarStock();

console.log(cliente.buscarProductoPorCosto(50));
>>>>>>> Stashed changes
