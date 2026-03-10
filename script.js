// Código para index.html---------------------------------------------------------------------------------
const varTitulo = document.getElementById("titulo");
const sonido = document.getElementById("sonido");

let textoInicial = true; // variable de tipo booleano: true or false
let sonidoActivado = false;

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
    
    if (sonidoActivado === false){ //es un condicional dentro de la función, así que se activa siempre y cuando el sonido no se haya activado
        sonido.play(); //reproduce el audio cuando se hace clic en el título
        sonidoActivado = true;
    }
});

// Código para memoria.html---------------------------------------------------------------------------------
const memorias =