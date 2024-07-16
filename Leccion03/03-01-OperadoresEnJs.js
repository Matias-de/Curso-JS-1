/*
let a=3, b=2;

z = a + b;
console.log("Resultado de la suma: "+ z);
z = a - b;
console.log("Resultado de la resta: "+ z);

z = a * b;
console.log("Resultado de la multiplicacion: "+ z);

z = a / b;
console.log("Resultado de la división: "+ z);

z = a % b;
console.log("Resultado de operación módulo: "+ z);

z = a ** b;
console.log("Resultado de operador exponente (potencia): "+ z);



//Incremento
///Pre-Incremento (operador ++ antes de la variable)
z =++a; 
console.log("Valor a: "+ a + ", Valor de z: "+z);
z = a++;

//Post incremento (operador++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-Decremento
z = --a;
console.log(a); //primero decrementa despues se asigna a z
console.log(z);

//Post-decremento
z = a--;
console.log(a); //primero lo asigna a z despues decrementa
console.log(z);


//precedencia de operadores

let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d; //se evalua de izquierda a derecha, despues se evalua la division y por ultimo se suma
console.log(z);

z = c + a * b / d; //se ejecuta primero la multiplicacion, despues se divide, y despues se suma
console.log(z);
//se puede cambiar el orden de ejecucion usando parentesis
z = (c + a) * b / c;
console.log(z);


//operadores de asignacion

let a = 1;

a+=3; //a = a + 3
console.log(a);

a -=2; //a = a-2
console.log(a);

a*=2; //a = a*2
console.log(a);

a/=3;
console.log(a);

*/
let a = 3, b = 2, c= "3";

let z = a == b;
console.log(z);
z = a === c; //se revisa el valor y los tipos de los datos
console.log(z);
z = a !== c; //Revisa el valor y el tipo de dato
console.log(z);

z = a < b;
console.log(z);

z = a <= c
console.log(z);

z = a > b;
console.log(z);

z = a >= 3;
console.log(z);