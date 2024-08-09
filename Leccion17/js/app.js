function sumar(){
    const forma = document.getElementById("forma");
    let resultado= parseFloat(forma["operandoA"].value) + parseFloat(forma["operandoB"].value);
    if(isNaN(resultado)){
        resultado = "La operación no incluye números";
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}