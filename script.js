const varTitulo = document.getElementById("titulo");
let textoInicial = true; // variable de tipo booleano: true or false

varTitulo.addEventListener("click", ()=> {
    //el punto es algo que le pertenece a esa variable
   
    //console.log("hiciste click");
    //alert("hiciste click")
    if(textoInicial === true){
        varTitulo.innerText = "El cuerpo duele";
       // textoInicial = false;
    } else {
        varTitulo.innerText = "El cuerpo recuerda";
      //  textoInicial = true
    }
    textoInicial = !textoInicial;
});