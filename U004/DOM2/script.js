const input = document.querySelector('input');
const parrafo = document.querySelector('p');
const boton = document.querySelector('button');
const color = document.querySelector('#color');
const prova = document.querySelector('#prova');

function colores(){

    document.querySelector('.ejemplo').style.backgroundColor = 'red';
    document.querySelector('p').innerHTML = "Rojo";


}

boton.addEventListener('click', () =>{


    parrafo.innerHTML = eval(input.value);
});

color.addEventListener('click', () =>{

colores();

const nuevoParrafo = document.createElement('p');
const contenidoNuevoParrafo = document.createTextNode("Soy un párrafo nuevo de trinca");

nuevoParrafo.appendChild(contenidoNuevoParrafo);

document.body.appendChild(contenidoNuevoParrafo);

// const nuevoNuevoParrafo = document.createElement('p');
// nuevoNuevoParrafo.appendChild(contenidoNuevoParrafo);

// document.body,appendChild(nuevoNuevoParrafo);





});