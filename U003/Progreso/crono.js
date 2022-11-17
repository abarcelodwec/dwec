// Variables globales

// Guarda el tiempo en formato cronómetro que mostrará en el display.
let cronometro;

// guarda el setInterval() para pasarle el clearTiemout()
let cronoOn;

// Display del cronómerto
let display = document.getElementById("display");

// Guarda el objeto 'Date()'
let tiempo;

// Guarda los valores individualmente de 'tiempo'
let horas;
let minutos;
let segundos;
let milisegundos;


// Botones
const iniciar = document.getElementById("iniciarCronometro");
const reset = document.getElementById("resetCronometro");
const parar = document.getElementById("pararCronometro");


//Capturar Clases

let cuadroProgreso = document.querySelector(".cuadroProgreso:not(.pintao)");
console.log(cuadroProgreso);


// Empieza reseteando tiempo y display.
resetCronometro();


// Función que gestiona la variable 'tiempo' aumentando en 1 segundo cada vez que se ejecuta
// Imprime por pantalla 'tiempo' cada vez que se ejecuta (si no está en pausa).
function elCronometro(){
    

    // Variables que guarda cada valor temporal de 'tiempo'
    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();
    milisegundos = tiempo.getMilliseconds();

    
    // Disminuimos en un segundo 'tiempo' si es juego o no.
    reset.disabled = true;
        
    tiempo.setSeconds(segundos - 1) ;
    
    formatoCronometro();
    cronometro = (minutos + ':' + segundos);
    
    display.innerHTML = cronometro;


    document.querySelector(".cuadroProgreso:not(.pintao)").classList.add('pintao');

    console.log(cuadroProgreso);

    if(minutos == 0 && segundos == 0){

        clearTimeout(cronoOn);
        parar.disabled = true;
        reset.disabled = false;
    }


    
    
}


// Método que que ejecuta 'elCronometro()' cada segundo
function iniciarCronometro(){
    
    cronoOn = setInterval(elCronometro, 1000);
    
    
    // Gestión de botones
    iniciar.disabled = true;
    reset.disabled = true;
    parar.disabled = false;
}



// Función que detiene la ejecución de 'iniciarCronometro()'
function pararCronometro(){
    
    clearTimeout(cronoOn);

    // Gestión de botones
    iniciar.textContent = 'Seguir';
    iniciar.disabled = false;
    reset.disabled = false;
    
}

// Método que resetea a valores iniciales 
function resetCronometro(){
    
    
    // Iniciamos 'tiempo' y ponemos display a 01:00,000
    tiempo = new Date(0,0,0,0,1,0);
    
    display.innerHTML = '01:00';
    
    // Gestión de los botones
    reset.disabled = true;
    iniciar.disabled = false;
    iniciar.textContent = 'Inicio';

    // document.querySelectorAll(".cuadroProgreso .pintao").classList.remove('pintao');
}




// Función que da formato con ceros delante si sólo tiene un dígito
function formatoCronometro(){

    if(horas<10){horas = '0' + horas;}            
    if(minutos<10){minutos = '0' + minutos;}
    if(segundos<10){segundos = '0' + segundos;}
    if(milisegundos<100){milisegundos = '0' + milisegundos;}

}






// Listeners

iniciar.addEventListener('click', iniciarCronometro, false);
parar.addEventListener('click', pararCronometro, false);
reset.addEventListener('click', resetCronometro, false);
