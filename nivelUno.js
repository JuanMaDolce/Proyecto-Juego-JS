// TRAE EL ARRAY DEL STORAGE

const imagenesStorage = JSON.parse(localStorage.getItem('imagenes'))

// MEZCLA EL ARRAY INICIAL

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(imagenesStorage)

// VARIABLES DEL JUEGO

const images = document.getElementById('imagenes');
const imagesDos = document.getElementById('imagenes2');
const imagesTres = document.getElementById('imagenes3');
const imagesCuatro = document.getElementById('imagenes4');
const imagesCinco = document.getElementById('imagenes5');
const reiniciar = document.getElementById('reiniciar')

document.getElementById('elige').innerHTML = (`Elige el primer Valor`);

// CREA LA SELECCIÓN DE IMAGENES EN EL JUEGO

function nodo(funcion,nodo){
    for (const imagen of imagenesStorage){
        let contenedor = document.createElement('li');
        contenedor.className = 'imagenes';
        contenedor.id = imagen.id;
        contenedor.innerHTML = `
            <img id="imagen" src="${imagen.imagen}" alt="">`
        nodo.appendChild(contenedor);
        contenedor.onclick = () => funcion(imagen);
    }
}
nodo(primerValor,images);

// ELECCIÓN DE VALORES

function primerValor(imagen){
    if (imagen.id === 1){
        images.remove();
        document.getElementById('elige').innerHTML = (`Elige el segundo Valor`);
        nodo(segundoValor,imagesDos)
    } else {
        perdiste()
    }
}
function segundoValor(imagen){
        if (imagen.id === 2){
        imagesDos.remove();
        document.getElementById('elige').innerHTML = (`Elige el tercer Valor`);
        nodo(tercerValor,imagesTres)
    } else {
        perdiste()
    }
}
function tercerValor(imagen){
    if (imagen.id === 3){
        imagesTres.remove();
        document.getElementById('elige').innerHTML = (`Elige el cuarto Valor`);
        nodo(cuartoValor,imagesCuatro)
    } else {
        perdiste()
    }
}
function cuartoValor(imagen){
    if (imagen.id === 4){
        imagesCuatro.remove();
        document.getElementById('elige').innerHTML = (`Elige el quinto Valor`);
        nodo(quintoValor,imagesCinco)
    } else {
        perdiste()
    }
}

// FUNCIÓN GANADORA

function quintoValor(imagen){
    imagen.id === 5 ? document.getElementById('resultado').innerHTML = (`GANASTE!`) : perdiste()
}

// FUNCIÓN PERDEDORA

function perdiste(){
    document.getElementById('resultado').innerHTML = (`PERDISTE!`);
    document.getElementById('reiniciar').innerHTML = (`<button>REINICIAR!</button>`); 
}

// BOTON DE REINCIO DEL JUEGO

reiniciar.onclick = () =>{
    location.href = "../niveles/inicio.html"
}