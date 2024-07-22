class Producto{
    static contadorProductos = 0;
    constructor(nombre= "", precio = 0){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this,this._precio;
    }
    set precio(precio){
        this,this._precio = precio;
    }
    toString(){
        return `ID producto: ${this._idProducto}
        Nombre: ${this._nombre}
        Precio: ${this._precio}`;


    }


    
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    
    }

    get idOrden(){
        return this._idOrden;
    }
    
    get productos(){
        return this._productos;
    }
    get contadorProductosAgregados(){
        return this._contadorProductosAgregados;
    }
        
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados] = producto;

        }else{
            console.log("No se pueden agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta+=producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._productos){
            productosOrden +="\n{"+producto.toString() + "}";
        }
        console.log(`Orden: ${(this._idOrden)}
        Total: ${this.calcularTotal()}, 
        Productos: ${productosOrden}`);
    }



}


let producto1 = new Producto("camisa", 2000);
console.log(producto1.toString());
let producto2 = new Producto("Pantalon", 4000);
console.log(producto2.toString());
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();
let orden2 = new Orden();
let producto3 = new Producto("Cinturon", 300);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2); //tira mensaje de error
orden2.mostrarOrden();