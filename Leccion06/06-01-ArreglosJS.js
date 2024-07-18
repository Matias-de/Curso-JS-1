let marcasAutos = new Array("BMW", "Audi", "Mercedes Benz"); //Vieja forma
const autos = ['BMW', 'Audi', 'Mercedes Benz'];
console.log(autos)

console.log(autos[0]);

for(let i = 0; i<autos.length; i++){
    console.log(autos[i]);
}

autos[2] = "MercedesBenz";
autos.push("Ford");
console.log(autos);
autos[5] = "Chevrolet"; //no recomendable dejar espacios
console.log(autos);
console.log(typeof(autos)); //no no sirve
console.log(Array.isArray(autos));
console.log(autos instanceof(Array));