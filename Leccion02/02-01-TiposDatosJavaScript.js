/*
Ejemplos de 
tipos de datos en JS
*/

//Tipo de dato string
/*
var nombre = "Carlos";
console.log(typeof nombre);
var numero = 1000;
console.log(numero);
//Tipo de dato object
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "11435676"
}
console.log(typeof objeto)

nombre = 10;
console.log(typeof nombre);

//Tipo boolean (true/false)

var bandera = true;
console.log(bandera + ' '+ typeof bandera); 

//Tipo de dato función

function miFuncion(){}
console.log(typeof miFuncion)

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//tipo de dato undefined

var x;
console.log(typeof x + ", Tipo de dato:  "+ x);
x = undefined //se le puede asignar tambien como valor, ya de por si si no se aclara nada cuando se declara tienen ese valor
console.log(typeof x + ", Tipo de dato:  "+ x);

//null = ausencia de valor

var y = null;
console.log(y + ', Tipo de dato: '+ typeof y);

var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);
var z = '';
console.log(z + ", tipo de dato: " + typeof z);



var nombre = "Juan";
var apellido = "Perez";
var nombreCompleto = nombre + apellido;
console.log(nombreCompleto);
var nombreCompleto2 = "carlos" + " " + "lara";
console.log(nombreCompleto2);
var x = nombre + 2 + 4;
console.log(x);
x = nombre + (2+4);
console.log(x);
x = 2 + 4 + "Juan";//las expresiones se evaluan de izquierda a derecha
console.log(x); 

*/
//no se necesita usar ni var ni let ni nada. pero no es buena practica(?)

//nombre = "Juan"
let nombre = "Juan"
const apellido = "Perez"
//las constantes no se pueden modificar.
/*apellido = "hola"*/ 

let nombreCompleto = "juan perez";
let nombrecompleto = "carlos lara"; //sensible a mayusculas
console.log(nombrecompleto);
console.log(nombreCompleto);



