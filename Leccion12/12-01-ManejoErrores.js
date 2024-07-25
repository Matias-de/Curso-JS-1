/*
"use strict";
try{
    let x = 10
    //miFuncion();
    throw "Mi error";
}
catch(error){
    console.log(error);
}
finally{
    console.log("Termina la revisión de errores")
}

console.log("Continuamos...")
*/
"use strict";
let resultado = "";
try{
    ///x=10;
    if(isNaN(resultado)) throw "No es un numero";
    else if(resultado === "" || resultado === " ") throw "Es cadena Vacia"
    else if(resultado >= 0)throw "Valor positivo" //reporte, en este caso no de errores (mala practica?)
    else if(resultado < 0)throw "Valor Negativo"
}catch (error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log("Termina revisión de errores")
}