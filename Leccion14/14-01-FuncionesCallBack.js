 //funciones callback

// function imprimir(mensaje){
//     console.log(mensaje);
// }

// function sumar(op1, op2, funcCallBack){
//     let res = op1 + op2;
//     funcCallBack("Resultado: "+res);
// }
// sumar(5, 3, imprimir);

 //llamadas asincronas con setTimeout

// function miFuncionCallBack(){
//     console.log("Saludo asincrono despues de 3 seg");
// }
// setTimeout(miFuncionCallBack,3000); //despues de 3 seg
// setTimeout(function(){console.log("Saludo asincrono 2")}, 4000);
// setTimeout( ()=> console.log("Saludo Asincrono 3"), 1000); //pierde la ejecucion secuencial, depende de en cuanto tiempo se dispara la funcion

//funcion setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

console.log(setInterval(reloj, 1000)); //1 seg