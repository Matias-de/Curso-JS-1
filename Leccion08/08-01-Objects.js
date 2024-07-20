/*
//Constructor

function Persona(nombre = "", apellido="", email=""){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " "+this.apellido;

    }
}

let padre = new Persona("Juan", "Perez", "JPerez@gmail.com");
console.log(padre);
let madre = new Persona("Laura", "Quintero", "lQuinte@gmail.com");
console.log(madre);
padre.nombre= "Carlos";
console.log(padre);
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());
//agregar propiedad a todos los objetos sin hacerlo en el constructor
Persona.prototype.tel = "44332211";
padre.tel = "55667788";
console.log(padre.tel);
console.log(madre.tel);



let miObjeto = new Object(); //usando el constructor de la clase
let miObjeto2 = {}; //sintaxis recomendable.
let miCadena = new String("Hola");
let miCadena2 = "hola" //datos primitivos
let miNumero = new Number(1);
let miNumero2 = 1; 
let miBoolean = new Boolean(false);
let miBoolean2 = false;
let miArreglo = new Array(); //formalidad (no recomendable)
let miArreglo2 = [];//sintaxis simplificada
let miFuncion = new Function();
let miFuncion2 = function(){};
console.log(x.lenght); //no tiene esa propiedad una variable primitiva
let persona = {
    nombre:"Juan",
    apellido:"Perez",
    email: "jPerez@gmail.com",
    edad:28,
    idioma: "es_arg",
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre +" "+this.apellido;   
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
};
/*
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona);
console.log(persona.nombreCompleto());

//Otra forma de crear objetos:
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Saturno 15";
persona2.tel = '223456432';
console.log(persona2.tel);

console.log(persona["nombre"]); //se pueden acceder a las propiedades como si fuese un arreglo

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}
    

persona.tel = "223654784";
console.log(persona);
delete persona.tel;
console.log(persona);
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);
//for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);


//getters y setters

console.log(persona.nombreCompleto);
console.log(persona.lang);
persona.lang = "en";
console.log(persona.lang);
*/

let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        //return this.nombre + " "+ this.apellido
        return titulo + ": " + this.nombre + " "+ this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}
//Uso de apply para usar
//el metodo nombreCompleto con los datos de persona2.
console.log(persona1.nombreCompleto("Lic.", "435435634"));
console.log(persona1.nombreCompleto.call(persona2, "Ingeniero", "43435345"));
//para el apply se necesita usar un arreglo para pasar laos argumentos
let arreglo = ["Ing.", "6543212"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));