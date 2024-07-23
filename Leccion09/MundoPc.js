class DispositivoEntrada{
    constructor(tipoEntrada="", marca=""){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    set marca(marca){
        this._marca = marca;
    }
    toString(){
        return `Tipo entrada: ${this._tipoEntrada} Marca: ${this._marca}`;
    }

}
/*
gsd1 = new DispositivoEntrada("fgfgd", "GDFFGD");
console.log(gsd1.toString());
*/
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `ID Ratón: ${this._idRaton}  ${super.toString()}`;
    }

}


raton1 = new Raton("USB", "Logitech");
raton2 = new Raton("Inalambrico", "HP");
/*
console.log(raton.toString())
raton2 = new Raton("Inalambrico", "HP");
console.log(raton2.toString())
*/

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `ID Teclado: ${this._idTeclado} ${super.toString()}`;
    }
}
teclado1 = new Teclado("USB", "HP");
teclado2 = new Teclado("Inalambrico", "Asus");

/*

console.log(teclado1.toString());
console.log(teclado2.toString());
*/

class Monitor{
    static contadorMonitores = 0;
    constructor(marca="", tamaño=""){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get marca(){
        return this._marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set marca(marca){
        this._marca=marca;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `ID monitor: ${this._idMonitor} Marca: ${this._marca}  Tamaño: ${this._tamaño}`;

    }
}
monitor1 = new Monitor("Asus", "27 pulgadas");
monitor2 = new Monitor("Samsung","34 pulgadas");
/*


console.log(monitor1.toString());
console.log(monitor2.toString());
*/
class Computadora{
    static contadorComputadoras = 0;
    constructor(marca = "", monitor, teclado, raton){
        this._marca = marca;
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get marca(){
        return this._marca;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get monitor(){
        return this._monitor;
    }
    get teclado(){
        return this._teclado;
    }
    get raton(){
        return this._raton;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    set raton(raton){
        this._raton = raton;
    }
    set marca(marca){
        this._marca = marca;
    }
    toString(){
        return `ID Computadora: ${this._idComputadora}, Marca: ${this._marca}
        Monitor: [${this._monitor.toString()}]
        Teclado: [${this._teclado.toString()}]
        Raton:   [${this._raton.toString()}]`
    }

}
computadora1 = new Computadora("HP", monitor1, teclado1, raton1);
computadora2 = new Computadora("Msi", monitor2, teclado2, raton2);
//console.log(computadora1.toString());
class Orden{
    static contadorOrdenes=0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    get computadoras(){
        return this._computadoras;
    }
    set computadoras(computadoras){
        this._computadoras = computadoras;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let productosOrden= "";
        for(let computadora of this._computadoras){
            productosOrden +="\n{"+computadora.toString() + "}\n";
        }
        return productosOrden;
       
    }
    toString(){
        return `\nID Orden: ${this._idOrden} Computadoras: 
        ${this.mostrarOrden()}`;
    }

    
}
orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
console.log(orden1.toString());
orden2 = new Orden();
orden2.agregarComputadora(computadora2);
console.log(orden2.toString());