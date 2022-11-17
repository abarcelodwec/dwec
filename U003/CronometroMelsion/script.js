// setTimeOut() y setInterval()


/*

    -setTimeout(funcion a llamar, milisegundos):
        Ejecutará la función transcurrido el tiempo en milisegundos.
    
    -setInterval(funcion a llamar, milisegundos):
        Ejecutará la función periodicamente en milisegundos.

    - clearInterval(funcion setInterval):
        Para setInterval()

        - clearTimeout():
        Para ejecución iniciada con setTimeout().
        
        */
       
// Variables
let elCrono;
let miHora = new Date(0,0,0,0);
let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

// Iniciar el cronometro
// miHora.setHours(0,0,0,0);

display.innerHTML = '00:00:00';


function crono(){

    let horas = miHora.getHours();
    let minutos = miHora.getMinutes();
    let segundos = miHora.getSeconds();
    
    segundos++;

    if(horas>12){
        horas = horas-12
    }else{

    }

    if(horas<10){horas = '0' + horas;}
    if(minutos<10){minutos = '0' + minutos;}
    if(segundos<10){segundos = '0' + segundos;}

    miHora.setSeconds(segundos);

    display.innerHTML = horas + ':' + 
                        minutos + ':' +
                        segundos;

}



// eventos

start.addEventListener('click', iniciar, false);

stop.addEventListener('click', parar, false)


function iniciar(){

    elCrono = setInterval(crono, 1000);
    start.disabled = true;
}

function parar(){

    clearTimeout(elCrono);
    reset.disabled = false;
    start.disabled = false;

}