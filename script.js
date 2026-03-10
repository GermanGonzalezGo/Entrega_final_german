// Código para index.html---------------------------------------------------------------------------------
const varTitulo = document.getElementById("titulo");
const sonido = document.getElementById("sonido");

if(varTitulo){

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
};


// Código para memoria.html---------------------------------------------------------------------------------
const lienzo = document.getElementById("lienzo");
if(lienzo){
const memorias = [
    "mis rodillas recuerdan las escaleras de mi infancia",
    "la piel aprende la temperatura de cada casa",
    "mis dedos recuerdan cosas que ya no existen",
    "el cuerpo sabe cuándo alguien se acerca por la espalda",
    "la lengua recuerda palabras que no quiero pronunciar",
    "una cicatriz es una fecha escrita en la piel",
    "mi espalda guarda el peso de la vieja maleta",
    "el olor del cloro al entrar al agua",
    "hay canciones que viven en los músculos",
    "mis manos recuerdan cómo volver incluso con los ojos cerrados",
    "el cuerpo reconoce lugares antes que la mente",
    "mis hombros recuerdan discusiones",
    "los pies saben cuándo un lugar ya no es hogar",
    "la piel distingue una caricia de una advertencia",
    "algunas calles viven en mis tobillos",
    "hay abrazos que siguen ocurriendo dentro del pecho",
    "el cuerpo recuerda incluso lo que la mente borra",
    "ciertas puertas todavía viven en mis manos",
    "mis ojos recuerdan la luz de habitaciones que ya no existen",
    "mi respiración cambia cuando paso por ciertas calles"
]
const musicaMemo = document.getElementById("musicaMemoria");
let musicaMemoria = false;
document.addEventListener("click", ()=> {
    if (musicaMemoria === false){ 
        musicaMemo.play(); 
        musicaMemoria = true;
    }
});

document.addEventListener("click", crearMemoria);// document es el elemento que representa toda la página de HTML
function crearMemoria(){
    const texto = document.createElement("p"); //crea un espacio nuevo tipo párrafo
    const indice = Math.floor(Math.random()*memorias.length);
    //memorias.lenght: Es la cantidad total de elementos que hay en la lista memorias
    //Math.random: Genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido).
    //Math.random() * memorias.length:Multiplica ese decimal por el total de memorias
    //ejm: si son 7 memorias, el resultado estará entre 0 y 6.999...(para llamar cosas en una lista se necesita de un número entero)
    //Math.floor: redondea hacia abajo al número entero más cercano
    texto.innerText = memorias[indice];//innerText trae el texto de html-indice: saca un elemento de una posición
    texto.classList.add("memoria");//classList: permite manejar las clases de un elemento (como si fuera una lista de etiquetas)
    //add.("memoria"): es como si <p> pasara a ser <p class:"memoria">
    const x = Math.random()*window.innerWidth; // window.innerwidth/Height = medidas exactas de la ventana del navegador del usuario en ese momento.
    const y = Math.random()*window.innerHeight; //multiplicar Math.random (da un número entre 0 y 1) por el ancho o alto de la pantalla
    //se obtiene una coordenada horizontal/vertical aleatoria.
    texto.style.left = x + "px";//controla la distancia desde el borde izquierdo de la pantalla hacia la derecha
    texto.style.top = y + "px";//controla la distancia desde el borde superior de la pantalla hacia abajo
    //el style es todo lo de estilo que guarda "texto"
    // el +"px" pega el numero con la unidad para que el navegador sepa donde poner cada elemento
    document.getElementById("lienzo").appendChild(texto); //append(añade)child = toma el párrado y lo añade al lienzo
};
};