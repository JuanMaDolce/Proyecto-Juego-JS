
// FORMULARIO DE INGRESO

const formulario = document.getElementById('formulario');

formulario.addEventListener("submit", () =>{
    formulario.remove();
    let contenedor = document.createElement('div')
    contenedor.innerHTML= `
        <p>Bienvenido/a ${formulario.children[1].value}</p>
        <p>Elige un juego!</p>
        <a href="./niveles/inicio.html">MEMORY GAME</a>
        <a href="./niveles/nivelDos.html">POKE GAME</a>`
    saludar.appendChild(contenedor)
}) 

formulario.addEventListener("submit", () =>{
    localStorage.setItem('mensajeBienvenida', formulario.children[1].value)
    })

// GUARDA LA INFORMACIÓN DEL USUARIO EN EL STORAGE

const bienvenida = localStorage.getItem('mensajeBienvenida') 

const saludar = document.getElementById('bienvenida')

const saludo = () =>{
    if (bienvenida && bienvenida !=='null'){
        formulario.remove();
        let contenedor = document.createElement('div')
        contenedor.innerHTML= `
        <p>Bienvenido/a ${bienvenida}</p>
        <p>Elige un juego!</p>
        <a href="./niveles/inicio.html">MEMORY GAME</a>
        <a href="./niveles/nivelDos.html">POKE GAME</a>`
        saludar.appendChild(contenedor)
    }
}
saludo();
