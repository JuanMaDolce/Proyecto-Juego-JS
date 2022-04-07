imagenes = [{'id':1, 'imagen': '../imagenes/angry.png'},
            {'id':2, 'imagen': '../imagenes/smile.png'},
            {'id':3, 'imagen': '../imagenes/nerd.png'},
            {'id':4, 'imagen': '../imagenes/blush.png'},
            {'id':5, 'imagen': '../imagenes/happy.png'}
]

// GUARDO EL ARRAY PARA USARLO EN OTRA PÁGINA

localStorage.setItem('imagenes', JSON.stringify(imagenes));

// CREO EL NODO DE MEMORIA DE IMAGENES

const images = document.getElementById('memorizar');

for (const imagen of imagenes){
    let contenedor = document.createElement('li');
    contenedor.className = 'imagenes';
    contenedor.id = imagen.id;
    contenedor.innerHTML = `
        <img id="imagen" src="${imagen.imagen}" alt="">`
    images.appendChild(contenedor);
} 

// CONTADOR DE COMIENZO DE JUEGO

let cuentaRegresiva = 5;

function actualizar() {
    document.getElementById('contador').innerHTML = cuentaRegresiva;
        cuentaRegresiva-=1; setTimeout(actualizar, 1E3)
}
actualizar();

// REDIRECCIONA AUTOMÁTICAMENTE AL JUEGO

function redireccionar(){
    Swal.fire('Que comience el juego!').then(()=>{location.href = "../niveles/nivelUno.html"});
}
setTimeout("redireccionar()", 5000);