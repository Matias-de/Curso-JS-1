class Empleado{
    constructor(nombre, sueldo){
        this.nombre= nombre;
        this.sueldo = sueldo;
    }
    obtenerDetales(){
        return `Empleado: Nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    //sobreescritura
    obtenerDetales(){
        return `Gerente: Departamento: ${this.departamento}; ${super.obtenerDetales()}`
    }


}

//polimorfismo
function determinarTipo(tipo){
    console.log(tipo.obtenerDetales());
    if(tipo instanceof Gerente){ //primero la clase de menor jerarquia
        console.log("Es un gerente");
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log("Es un empleado");
    }
    else if(tipo instanceof Object){
        console.log("Es un objeto");
    }
}

//prueba
let empleado1 = new Empleado("Juan", 3000);
let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
determinarTipo(empleado1);
determinarTipo(gerente1);