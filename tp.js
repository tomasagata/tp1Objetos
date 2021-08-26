// --- START --- : Clases de tipo Lista

/*abstract*/ class Lista{          
    listaProductos;

    /*abstract*/ agregarProducto(producto);

    /*abstract*/ buscarProducto();

    /*abstract*/ modificarProducto();
}

class Stock extends Lista{
    
    constructor(){
        super();
    }

    agregarProducto(producto){
        //...
    }

    buscarProducto(){
        //...
    }

    modificarProducto(){
        //...
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

    buscarProducto(){
        //...
    }

    modificarProducto(){
        //...
    }

    quitarProducto(){
        //...
    }
}


// --- START --- : Clases de Tipo productos

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
    set nombre(nombre){
        this.nombre = nombre;
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
    set cantidad(cantidad){
        this.cantidad = cantidad;
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

