class Persona{
    constructor(nombre="", apellido=""){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    /*
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
        */
    toString(){
       return "Nombre: " + this._nombre + ", Apellido: " + this._apellido; 
    }
    
    
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento= departamento;
        
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    /*
    nombreCompleto(){
        return "Nombre: " + super.nombreCompleto() + ", Apellido:  "+ this._departamento;
    }
        */
    toString(){
        return super.toString() + ", Departamento:  "+ this._departamento;
    }
}


let persona1 = new Persona("Juan", "Perez");
console.log(persona1.nombre);
console.log(persona1.apellido="Juarez");
console.log(persona1);
let persona2 = new Persona("Carlos", "Lara");
console.log(persona2.apellido);
console.log(persona2.nombre = "Juan Carlos");
console.log(persona2);
let empleado1 = new Empleado("Pedro", "Rodriguez", "R.R.H.H");
console.log(persona1.toString());
//console.log(persona1.nombreCompleto());
console.log(empleado1.toString());

