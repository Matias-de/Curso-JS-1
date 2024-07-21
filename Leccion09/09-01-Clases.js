class Persona{
    static contadorPersonas = 0; //atributo de clase
   // email = "Valor default email";//atributo de los objetos
    static get MAX_OBJ(){
        return 5;
    }
   
   
   constructor(nombre="", apellido=""){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = Persona.contadorPersonas++;
        }else{
            throw new Error(Error.name+" Se ha superado el maximo de intentos permitidos")
            //console.log("Se ha superado el maximo de intentos permitidos");
            
        }
        
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
       return "Nombre: " + this._nombre + ", Apellido: " + this._apellido + ", ID: " + this.idPersona; 
    }
    static saludar(){
        console.log("Saludos desde metodo estatico");
    }
    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido);
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

try{


let persona1 = new Persona("Juan", "Perez");
console.log(persona1.nombre);
console.log(persona1.apellido="Juarez");
console.log(persona1);
let persona2 = new Persona("Carlos", "Lara");
console.log(persona2.apellido);
console.log(persona2.nombre = "Juan Carlos");
console.log(persona2);
let empleado1 = new Empleado("Pedro", "Rodriguez", "R.R.H.H");
console.log(persona2.toString());
//console.log(persona1.nombreCompleto());
console.log(empleado1.toString());
//metodo estatico se utiliza desde la clase y no desde los objetos
//no es posible llamar un metodo estatico desde un objeto:
//persona1.saludar();
Persona.saludar();
Persona.saludar2(persona1); //los metodos estaticos no se pueden previsualizar
Empleado.saludar(); //se heredan a clases hijas
Empleado.saludar2(empleado1);
console.log(Persona.contadorPersonas);
//console.log(persona1.email);
//console.log(empleado1.email);
//si se quiere acceder desde la clase, tira undefined, es un atributo de los objetos.
//console.log(Persona.email);
//console.log(Empleado.email);
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10; //no surte efecto modificaciones (sin un set)
console.log(Persona.MAX_OBJ);
}catch(error){
    console.log(error.message);
}