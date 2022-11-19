// Variables globales

// Guarda el tiempo en formato cronómetro que mostrará en el display.
let cronometro;

// guarda el setInterval() para pasarle el clearTiemout()
let cronoOn;

// Boolean para controlar si está en pausa o no. 
let isPausa = false;

// Display del cronómerto
let display = document.getElementById("display");

// Guarda el objeto 'Date()'
let tiempo;

// Botones
let iniciar = document.getElementById("iniciarCronometro");
let parar = document.getElementById("pararCronometro");
let reset = document.getElementById("resetCronometro");
let pausar = document.getElementById("pausarCronometro");


// Empieza reseteando tiempo, display y pausa
resetCronometro();


// Función que gestiona la variable 'tiempo' aumentando en 1 segundo cada vez que se ejecuta
// Imprime por pantalla 'tiempo' cada vez que se ejecuta (si no está en pausa).
function elCronometro(){
    

    // Variables que guarda cada valor temporal de 'tiempo'
    let horas = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();
    let milisegundos = tiempo.getMilliseconds();
    
    // Aumentamos en un segundo 'tiempo'
    tiempo.setMilliseconds(milisegundos + 10) ;

    // Ponemos ceros delante si sólo tiene un dígito
    if(horas<10){horas = '0' + horas;}            
    if(minutos<10){minutos = '0' + minutos;}
    if(segundos<10){segundos = '0' + segundos;}
    if(milisegundos<100){milisegundos = '0' + milisegundos;}
    
    // Asignamos valor y formato a imprimir a la variable 'cronometro'
    cronometro = (horas + ':' + minutos + ':' + segundos + ',' + milisegundos);
    
    // Si NO está en pausa, imprime por pantalla el tiempo actual 
    // Si está en pausa, no imprime nada (pero ha aumentado el cronómetro)
    if(!isPausa){
        display.innerHTML = cronometro;
    }
}


// Método que que ejecuta 'elCronometro()' cada segundo
function iniciarCronometro(){
    
    cronoOn = setInterval(elCronometro, 10);
    
    isPausa = false; //Por si previamente se había pausado
    
    // Gestión de botones
    iniciar.disabled = true;
    parar.disabled = false;
    pausar.disabled = false;
    reset.disabled = true;
}



// Función que detiene la ejecución de 'iniciarCronometro()'
function pararCronometro(){
    
    clearTimeout(cronoOn);
    
    //Por si previamente se había pausado
    if(isPausa){
        isPausa = false; 
        display.innerHTML = cronometro; //Mostrar el valor real del cronómetro
    }
    
    
    
    // Gestión
    iniciar.textContent = 'Seguir';
    iniciar.disabled = false;
    parar.disabled = true;
    reset.disabled = false;
    pausar.disabled = true;
    pausar.textContent = 'Pausar';
    
    
}

// Método que resetea a valores iniciales 'tiempo' y el display 
function resetCronometro(){
    
    
    // Iniciamos 'tiempo' y ponemos display a 00:00:00,000
    tiempo = new Date(0,0,0,0,0);
    display.innerHTML = '00:00:00,000';
    
    isPausa = false;//Por si previamente se había pausado
    
    
    // Gestión de los botones
    parar.disabled = true;
    reset.disabled = true;
    iniciar.disabled = false;
    iniciar.textContent = 'Inicio';
    pausar.disabled = true;
    pausar.textContent = 'Pausar';
}


// Método que actua sobre el estado de la variable 'isPausa' para detener/reanudar la impresión del cronómetro
// pero sin detenerlo.
function pausarCronometro(){
    
    if (isPausa){
        
        isPausa = false;
        pausar.textContent = 'Pausar';
        
    }else{
        
        isPausa = true;
        pausar.textContent = 'Continuar';
    }
}

// Listeners

iniciar.addEventListener('click', iniciarCronometro, false);
parar.addEventListener('click', pararCronometro, false);
reset.addEventListener('click', resetCronometro, false);
pausar.addEventListener('click', pausarCronometro, false);
