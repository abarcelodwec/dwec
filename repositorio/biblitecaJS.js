// Redondeo

function redondeo(numero){

    // numero = 278.6;
    numero = parseFloat(Math.round(numero * 100) / 100).toFixed(2);

    console.log(numero);

}

function formatoCerosDelante(){

    if(horas<10){horas = '0' + horas;}            
    if(minutos<10){minutos = '0' + minutos;}
    if(segundos<10){segundos = '0' + segundos;}
    if(milisegundos<100){milisegundos = '0' + milisegundos;}

}

