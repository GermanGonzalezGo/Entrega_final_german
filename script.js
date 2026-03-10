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
    "la piel recuerda",
    "una cicatriz sabe por qué está ahí",
    "mis manos saben volver",
    "el cuerpo aprende antes que la mente",
    "un olor abre una puerta",
    "mi espalda guarda inviernos",
    "el cuerpo no olvida"
]

document.addEventListener("click", crearMemoria);// document es el elemento que representa toda la página de HTML
function crearMemoria(){
    const texto = document.createElement("p"); //crea un espacio nuevo tipo párrafo
    const indice = Math.floor(Math.random()*memorias.length);
    //memorias.lenght: Es la cantidad total de elementos que hay en la lista memorias
    //Math.random: Genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido).
    //Math.random() * memorias.length:Multiplica ese decimal por el total de memorias
    //al ser 7 memorias, el resultado estará entre 0 y 6.999...(para llamar cosas en una lista se necesita de un número entero)
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