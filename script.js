// Código para index.html---------------------------------------------------------------------------------
const varTitulo = document.getElementById("titulo");
const sonido = document.getElementById("sonido");
const varSubti = document.querySelector(".subtitulo");

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
}

const subtitulos = [
    "¿Conoces tu cuerpo?",
    "¿Te has preguntado si sabes escucharle?",
    "¿Valoras lo corporal?",
    "¿Eres consciente de las sensaciones corporales?",
    "¿Qué pasa si sientes tu piel?",
    "¿Cómo se siente la textura de tu ropa encima de esta?",
    "¿Qué pasa si dejas de fruncir el ceño?",
    "¿Qué tal te parece sentarte bien?",
    "¿Crees que hay cosas que no puedes hacer?",
    "¿Y si subes los pies a la mesa o te tiras al suelo?",
    "¿Crees que puedes respirar profundo mientras haces ruido?",
    "¡Ten presente que el cuerpo también es una forma de control social!",
    "Sigue adelante por donde quieras empezar:"
];
let iTxt = 0;

if(varSubti) {
varSubti.addEventListener("click", ()=> {
    varSubti.innerText = subtitulos[iTxt]
    iTxt += 1; // iTxt = iTxt + 1
    if(iTxt >= subtitulos.length){ //devuelve al inicio sin importar el número de elementos en la lista
        iTxt = 0
    };
});
}

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
];

const musicaMemo = document.getElementById("musicaMemoria");

if(musicaMemo) {
let musicaMemoria = false;
document.addEventListener("click", ()=> {
    if (musicaMemoria === false){ 
        musicaMemo.play(); 
        musicaMemoria = true;
    }
});
}

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
    const x = numeroAleatorio(0, window.innerWidth - 150); // window.innerwidth/Height = medidas exactas de la ventana del navegador del usuario en ese momento.
    const y = numeroAleatorio(0, window.innerHeight - 200); //multiplicar Math.random (da un número entre 0 y 1) por el ancho o alto de la pantalla
    //se obtiene una coordenada horizontal/vertical aleatoria.
    texto.style.left = x + "px";//controla la distancia desde el borde izquierdo de la pantalla hacia la derecha
    texto.style.top = y + "px";//controla la distancia desde el borde superior de la pantalla hacia abajo
    //el style es todo lo de estilo que guarda "texto"
    // el +"px" pega el numero con la unidad para que el navegador sepa donde poner cada elemento
    document.getElementById("lienzo").appendChild(texto); //append(añade)child = toma el párrado y lo añade al lienzo
};
};

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// Código para cuerpo.html ---------------------------------------------------------------------------------

const lienzoCuerpo = document.querySelectorAll(".video");//esto llama a todos los elementos con la clase video en el html
if(lienzoCuerpo.length > 0){
lienzoCuerpo.forEach(video =>{ //para cada video de la lista hace lo que está dentro
    const x = Math.random() * (window.innerWidth - 260); 
    //Math.random genera un numero aleatorio entre 0 y 1 y multiplicarlo por el ancho de la pantalla genera una 
    //posición hoizontal aleatoria (lo mismo para Height) los - 320 y 180 son los pixeles que no se tienen en cuenta
    const y = Math.random() * (window.innerHeight - 150);

    //con video.style se accede al css
    //left y top cambian las coordenadas horizontales o verticales
    //px son la unidad de medida 
    video.style.left = x + "px";
    video.style.top = y + "px";
});
};

// Código para ruptura.html ---------------------------------------------------------------------------------

const elementosParallax = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
let scroll = window.scrollY;/*scrollY = cuántos píxeles bajó el usuario*/

elementosParallax.forEach(el => {
    el.style.transform = "translateY(" + scroll * 0.2 + "px)";
    /*0.2:significa que la imagen se mueve 5 veces más lento que el scroll*/
});

});

//codigo para tecnologia.html---------------------------------------------------------------------------------

const listaCabezas = [
  "https://i.pinimg.com/736x/42/84/97/428497d989a4239adb267e8e944b9339.jpg",
  "https://i.pinimg.com/736x/0e/20/5f/0e205fb4ce457bd91042dcd51302e333.jpg",
  "https://i.pinimg.com/1200x/da/2c/83/da2c8388eb42e2cda937924cf6884d98.jpg",
];
const listaTroncos = [
    "https://i.pinimg.com/1200x/96/84/c7/9684c7b64788dda6d7b798906d55909d.jpg",
    "https://i.pinimg.com/1200x/58/e9/41/58e941c2bf4d746d935440a036a6e80e.jpg",
    "https://i.pinimg.com/736x/1d/f7/5d/1df75d228042b1382fc23fd289e914b7.jpg",
];
const listaPatas = [
  "https://i.pinimg.com/1200x/67/f3/9d/67f39d0ab7033826fb7830f62f70d759.jpg",
  "https://i.pinimg.com/736x/de/76/bb/de76bba8b2c712a21863de5272987c18.jpg",
  "https://i.pinimg.com/736x/46/f9/8b/46f98b6006211122a7c551fa0a949b99.jpg",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();