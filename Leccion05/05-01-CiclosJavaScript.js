/*
let contador = 0;

while(contador<3){
    console.log(contador);
    contador++;
}


contador = 0;


do{
    console.log(contador);
    contador++;

}while(contador < 3);

for(let i=0; i<3; i++){
    console.log(i);
}
    


for(let i = 0; i<=10; i++){
    if(i % 2 == 0){
        console.log(i);
        //break; //malisima practica
    }
}
    */
inicio: //etiqueta (no recomendables)
for(let i = 0; i<=10; i++){
    if (i % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion, (tiene pinta de mala practica tambien)
    }else{
        console.log(i);
    }
}