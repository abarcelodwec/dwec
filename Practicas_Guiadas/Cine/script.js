const contenidor = document.querySelector('.contenidor');
const seients = document.querySelectorAll('.fila .seient:not(.ocupat)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
let preuDelTicket = +peliculaSelect.value;

ompleUI();

// Actualiza los totales
function actualitzaSeleccioSeients(){

    const seientsSeleccionats = document.querySelectorAll('.fila .seient.seleccionat');


    // const seientIndex = [...seientsSeleccionats].map(function(seient){

    //     return [...seients].indexOf(seient);


    // });

    const seientsIndex = [...seientsSeleccionats].map((seient) => [...seients].indexOf(seient));


    localStorage.setItem('seientsSeleccionats', JSON.stringify(seientsIndex));


    const contadorSeientsSeleccionats = seientsSeleccionats.length;

    contador.innerText = contadorSeientsSeleccionats;

    total.innerText = contadorSeientsSeleccionats * preuDelTicket;

    console.log(contadorSeientsSeleccionats);

}

// Guarda en LocalStorage el índice del select i el preu de la pelicula selecionada
function guardaInfoPelicula(indexPelicula, preuPelicula){

    localStorage.setItem('indexPeliculaSeleccionada', indexPelicula);
    localStorage.setItem('preuPeliculaSeleccionada', preuPelicula);

}

// Recupera info localStorage y rellena la UI
function ompleUI(){

    const seientsSeleccionats = JSON.parse(localStorage.getItem('seientsSeleccionats'));

    if(seientsSeleccionats !== null && seientsSeleccionats.length>0){

        seients.forEach((seient, index) => {

            // console.log('seient ' + seient);
            // console.log('Index ' + index);

            if(seientsSeleccionats.indexOf(index) > -1) {

                seient.classList.add('seleccionat');
            }


        });

    }

    const indexPeliculaSeleccionada = localStorage.getItem('indexPeliculaSeleccionada');

    if(indexPeliculaSeleccionada !== null){

        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }

    const preuPeliculaSeleccionada = localStorage.getItem('preuPeliculaSeleccionada');

    if(preuPeliculaSeleccionada !== null){


        preuDelTicket = +preuPeliculaSeleccionada;

    }

}

// EVENTOS
contenidor.addEventListener('click', (e) => {
    if(e.target.classList.contains('seient') && !e.target.classList.contains('ocupat')){

        e.target.classList.toggle('seleccionat');

        actualitzaSeleccioSeients();
    }
});


peliculaSelect.addEventListener('change', (e) => {
    
    preuDelTicket = +e.target.value;
    
    guardaInfoPelicula(e.target.selectedIndex, e.target.value);
    
    
    actualitzaSeleccioSeients();
    
});

actualitzaSeleccioSeients();
// console.log(preuDelTicket);