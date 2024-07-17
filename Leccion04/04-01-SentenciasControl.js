/*
let condicion = true;

if (condicion){
    console.log("verdadero");
}else{
    console.log("Falsa");
}


let numero = 3;

if (numero == 1){
    console.log("Numero uno");
}else if (numero == 2){
    console.log("Numero dos");
}else if (numero == 3){
    console.log("Numero tres");
}else if (numero == 4){
    console.log("Numero cuatro");
}else{
    console.log("Numero desconocido");
}


let mes = 11;
let estacion;

if (mes == 12 || mes == 1 || mes ==2){
    estacion = "Verano";
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Otoño";
}else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Invierno";
}else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "Primavera";
}else{
    estacion="Numero de mes invalido";
}

console.log(estacion);



let hora = 6, mensaje;

if (hora >= 6 && hora <= 11){
    mensaje = "Buenos dias";
}else if(hora >= 12 && hora <= 18){
    mensaje = "Buenas tardes";
}else if(hora >= 19 && hora <= 24){
    mensaje = "Buenas Noches";
}else if(hora >= 0 && hora < 6){
    mensaje = "durmiendo";
}else{
    console.log("ERROR; EDAD INVALIDA")
}
console.log(mensaje);




let numero = 3;
let numeroTexto;

switch(numero){
    case 1:
        numeroTexto= "Numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero cuatro"
        break;
    default:
        numeroTexto = "Valor Desconocido"
        break;

}

console.log(numeroTexto);
*/
let mes = 11, estacion = "Estacion desconocida";

switch(mes){
    case 1: case 2: case 12:
        estacion = "Verano";
        break;
    case 3: case 4: case 5:
        estacion = "Otoño";
        break;
    case 6: case 7: case 8:
        estacion = "Invierno";
        break;
    case 9: case 10: case 11:
        estacion = "Primavera";
        break;
    default:
        estacion = "mes invalido";
        break;



}

console.log(estacion)

