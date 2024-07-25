function miFuncion(){
    console.log("Saludos desde miFuncion");
}
miFuncion();
//funciones flecha / son anonimas
/*
const miFuncionFlecha = ()=>{
    console.log("Saludos desde miFuncionFlecha");
}
*/
//const miFuncionFlecha = () => console.log("Saludos desde miFuncionFlecha");
//miFuncionFlecha();
// const saludar = () => {
//     return "Saludos desde funcion flecha";
// }
const saludar = () => "Saludos desde funcion flecha";
console.log(saludar());
const regresaObjeto = ()=>({nombre:"Juan", apellido:"Lara"});
console.log(regresaObjeto());
//const funcionConParametros = (mensaje) => console.log(mensaje);
//funcionConParametros("Saludos desde func. con parametro");
const funcionConParametros = (op1, op2) => "Resultado: "+(op1 + op2);
console.log(funcionConParametros(3,5));
