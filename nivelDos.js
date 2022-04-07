// VARIABLES DEL JUEGO

const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/?limit=9";
const imagenes = document.getElementById('pokemones')
const reiniciar2 = document.getElementById('reiniciar2')
const pistas = document.getElementById('pistas')
let form1 = document.getElementById('form')
let cuentaRegresiva = 60;
let timer
let endGame
let eliminados = 0

// CREA EL NODO DE IMÁGENES

fetch(URL_POKEMON)
.then(resultado => resultado.json())
.then(respuesta => {
    for (let pokemon of respuesta.results) {
        const img = document.createElement('div')
        const id = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
        img.innerHTML = `
        <img id="${id}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">`
        imagenes.appendChild(img)
        }
    })

// CREA EL ARRAY DE NOMBRES Y LAS PISTAS DE LOS NOMBRES MEZCLADOS

fetch(URL_POKEMON)
.then(resultado => resultado.json())
.then(respuesta => {
        const names = respuesta.results
        pokeArray = [];
        for(i in names)
        pokeArray.push(names[i].name);
        pokeJuego(pokeArray);

        // CREA EL ARRAY PARA MEZCLAR LOS NOMBRES PARA LAS PISTAS

        for ( let mezcla of  pokeArray){
            const shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
            const mix = document.createElement('p')
            mix.innerHTML = `
            ${shuffle(mezcla)}`
            pistas.appendChild(mix)
        }
    })

document.getElementById('pistas').innerHTML = (`<h2>Pistas!</h2>`)

// EJECUCIÓN DEL JUEGO

eleccion = (imagen) =>{
    document.getElementById(`${imagen}`).remove();
    eliminados = eliminados + 1
    ganaste();
}

pokeJuego = (pokeArray) =>{
    form1.addEventListener('submit', (e) =>{
        e.preventDefault()
        let pokemon = document.getElementById('pokeNombre').value
            if (pokemon.toLowerCase() == pokeArray[0]){
                eleccion(1);
            } else if (pokemon.toLowerCase() == pokeArray[1]){
                eleccion(2);
            } else if (pokemon.toLowerCase() == pokeArray[2]){
                eleccion(3);
            } else if (pokemon.toLowerCase() == pokeArray[3]){
                eleccion(4);
            } else if (pokemon.toLowerCase() == pokeArray[4]){
                eleccion(5);
            } else if (pokemon.toLowerCase() == pokeArray[5]){
                eleccion(6);
            } else if (pokemon.toLowerCase() == pokeArray[6]){
                eleccion(7);
            } else if (pokemon.toLowerCase() == pokeArray[7]){
                eleccion(8);
            } else if (pokemon.toLowerCase() == pokeArray[8]){
                eleccion(9);
            } else if (pokemon.length == 0){
                Swal.fire('Debes ingresar un valor!')
            } else {
                Swal.fire('UPS!, intenta de nuevo!')
            }
    })
}

// FUNCIÓN GANADORA

ganaste = () =>{
    if(eliminados === 9){
        document.getElementById('mensaje').innerHTML = ('GANASTE!');
        imagenes.remove();
        document.getElementById('regresiva').remove();
        clearTimeout(endGame);
        clearTimeout(timer);
        document.getElementById('form').remove();
        document.getElementById('pistas').remove();
    }
}

// FUNCIÓN PERDEDORA

perdiste = () => {
    document.getElementById('mensaje').innerHTML = ('SE TE ACABÓ EL TIEMPO!');
    document.getElementById('reiniciar2').innerHTML = (`<button>REINICIAR!</button>`); 
    imagenes.remove();
    document.getElementById('regresiva').remove();
    document.getElementById('form').remove();
    document.getElementById('pistas').remove();
    clearTimeout(timer);
}
endGame = setTimeout(perdiste, 60000)

// REINICIA EL JUEGO

reiniciar2.onclick = () =>{
    location.href = "../niveles/nivelDos.html"
}

// CUENTA REGRESIVA 

function regresiva() {
    document.getElementById('regresiva').innerHTML = cuentaRegresiva;
        cuentaRegresiva-=1; 
        timer = setTimeout(regresiva, 1000)
}
regresiva();

