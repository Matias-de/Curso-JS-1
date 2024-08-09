const personas = [
    new Persona("Juan", "Perez"),
    new Persona("Karla", "Lara")
];
function mostrarPersonas(){
    console.log("Mostrar Personas...");
    let texto = "";
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}
function agregarPersona(){
    const forma = document.getElementById("forma");
    if(nombre.value != "" && apellido.value != ""){
        const persona = new Persona(forma["nombre"].value, forma["apellido"].value);
        personas.push(persona);
        mostrarPersonas();

    }else{
        console.log("No hay informacion que agregar");
    }
}