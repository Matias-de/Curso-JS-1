class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre="", apellido="", edad=0, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `${super.toString()}ID cliente: ${this._idCliente}Fecha de registro: ${this._fechaRegistro}`;
    }
    
}