/*
//declaracion de la funcion
//hoisting
function miFuncion(a, b){
    console.log("Suma: "+ (a+ b));
}


//llamado a la función
miFuncion(2, 3);


function miFuncion(a,b){
    console.log(arguments.length);
    return a + b;
}

console.log("Suma: " + miFuncion(2,6));
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


//declaracion de funcion de tipo expresión

let sumar = function(a=0,b=0){//valores por default por si no se le pasa ninguno a la funcion, y no devuelva NaN
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);//como no hay mas argumentos devuelve:
    return a + b
};
resultado = sumar(3, 4); //se le pueden pasar mas o menos argumentos, no rompe el programa
console.log(resultado);

//funciones self-invocking
(function (a,b){
    console.log("Ejecutando la funcion: "+ (a + b));
})(3,4);

console.log(typeof(miFuncion));
/*
//funcione flecha

const sumarFuncionTipoFlecha = (a, b)=> a+b;
console.log(sumarFuncionTipoFlecha(3,4));

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}


let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log("Resultado de sumar todos los argumentos pasados: "+resultado);

//paso por valor en funciones
//tipos primitivos
//paso por valor
let x = 10;
function cambiarValor(a){
    a=20;
}
cambiarValor(x);
console.log(x)
*/
//paso por referencia
const persona ={
    nombre:"Juan",
    apellido:"Perez"
}

function cambiarValorObjeto(persona1){
    persona1.nombre = "Carlos";
    persona1.apellido = "Lopez";
}
console.log(persona);
cambiarValorObjeto(persona);
console.log(persona);
