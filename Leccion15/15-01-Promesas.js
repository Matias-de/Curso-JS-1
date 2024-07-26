let miPromesa = new Promise((resolver, rechazar) =>{
    let expresion = true;
    if(expresion){
        resolver("Resolvió correctamente");
    }else{
        rechazar("Se produjo un error");
    }
});

//miPromesa.then(valor=> console.log(valor), error=> console.log(error));
// miPromesa
// .then(valor=> console.log(valor))
// .catch(error=>console.log(error));

let promesa = new Promise((resolver)=>{
    //console.log("Inicio promesa");
    setTimeout(()=>resolver("Saludos con promesa y timeout"),3000)
    //console.log("Fin promesa");
});
//promesa.then(valor =>console.log(valor));

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return "Saludos con promesa y async";
}
//miFuncionConPromesa().then(valor=>console.log(valor));

//async/await
//await solo se puedde usar dentro de una funcion declarada con async
async function funcionPromesaYAwait(){
    let miPromesa = new Promise(resolver=>{
        resolver("Promesa con await");
    });
    console.log(await miPromesa);
}
//funcionPromesaYAwait();

//setTimeOut//async//await
async function funcionPromesaAwaitTimeOut()
{
    console.log("Inicio funcion");
    let miPromesa = new Promise(resolver=>{
        setTimeout(()=>resolver("Promesa con await y timeOut"), 3000);
    });
    console.log(await miPromesa);
    console.log("Fin funcion");
}

funcionPromesaAwaitTimeOut();


