class Persona{
    static contadorPersonas=0;
    constructor(nombre="", apellido="", edad=0){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
        
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    toString(){
        return `ID: ${this._idPersona}, Nombre: ${this._nombre}, Apellido: ${this._apellido} Edad: ${this._edad}`; 

    }


}

