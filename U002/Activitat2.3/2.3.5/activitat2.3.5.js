// Variables globales para su uso en las diferentes funiciones

// Array con las palabras clave a acertar
let arrPalabrasClave = ["ORDENADOR", "AEROPUERTO", "SILLA", "SUPERMERCADO", "ZARANDEAR", "MELOCOTON", "CHIMICHURRI", "MONASTERIO", "EXTINTOR", "CONSTANTINOPLA", "LECHE", "TARTAMUDEAR"]

// Variable qeu acumula los intentos
let intentos = 0;

// Array que contiene la palabra oculta que se va resolviendo
let arrPalabraOculta = [];

// Acumula la palabra clave al azar
let palabraClave = [];

// Acumula en un array dígito a dígito la palabra clave
let arrPalabraClave = [];

// Acumula las letras falladas
let letraFallada="";

// Guarda el tiempo en formato cronómetro que mostrará en el display.
let cronometro;

// guarda el setInterval() para pasarle el clearTiemout()
let cronoOn;

// guarda el Tiem() para pasarle el clearTiemout()
let finTiempo;

// Display del cronómerto
let displayLetra = document.getElementById("displayLetra");

// Guarda el objeto 'Date()'
let tiempo;

// Guarda los valores individualmente de 'tiempo'
let horas;
let minutos;
let segundos;
let milisegundos;

// Listener de los diferentes botones
document.getElementById("jugar").addEventListener("click", jugar, false);
document.getElementById("letra").addEventListener("click", intentoLetra, false);
document.getElementById("resolver").addEventListener("click", resolver, false);
document.getElementById("input").addEventListener("keydown",

function(e) {
    if(e.key === 'Enter'){
        intentoLetra()
    }
},

false);

// Al inicio solo está activo el botón jugar y Salir
document.getElementById("letra").disabled = true;
document.getElementById("resolver").disabled = true;
document.getElementById("dibujo").src = "img/LogoRamis.jpg";



// Función que prepara un nuevo juego y queda a la espera del usuario para que intervenga
function jugar(){

    // Iniciamos el tiempo de la letra
    iniciarCronometro();
    
    
    // Reseteamos intentos, letras falladas y array de la palabra oculta de posibles partidas anteriores.
    intentos = 7;
    letraFallada = "Falladas: ";
    arrPalabraOculta = [];
    document.getElementById("letraFallada").innerHTML = "";

    // Muestra el dibujo inicial ahora con todos los intentos
    dibujo();

    // Elige una palabra del array arrPalabrasClave al azar
    palabraClave = arrPalabrasClave[Math.floor(Math.random() * 10)];
    
    // Convierte en mayúsculas para poder comparar posteriormente de forma certera,
    // omitiendo posibles errores del usuario al insertar letras o resolver.
    palabraClave = palabraClave.toUpperCase();
    
    // Insertamos la palabra Clave en un array
    arrPalabraClave = palabraClave.split("");
    
    //Rellenamos array con guiones que serán las letras sin acertar ( Ej.: CASA = __ A __ A )
    for (let i = 0; i < arrPalabraClave.length; i++){
        
        arrPalabraOculta[i] = " __ ";    
    }

    // Imprime plabra oculta (guiones)
    document.getElementById("palabraOculta").innerHTML = arrPalabraOculta.join("");
    
    // Habilita los botones de letra y resolver y deshabilita el botón jugar
    document.getElementById("letra").disabled = false;
    document.getElementById("resolver").disabled = false;
    document.getElementById("jugar").disabled = true;
}


// Función de intento de letra que compara la letra insertada con la palabra clave
function intentoLetra (){

    
    // Paramos el tiempo de la letra
    clearTimeout(cronoOn);

    // Para controlar si ha habido aciertos o no
    let acierto = false;

    // Pedimos letra al usuario
    let letra = document.getElementById('input').value;

    
    // Ponemos la letra en mayúscula
    letra = letra.toUpperCase();
    
    // Validamos que la letra es realmente una letra y no un número, símbolo o espacios.
    letra = validarLetra(letra);
    

    // Bucle que recorre la palabra clave dígito a dígito y lo compara con la letra e introduce en el array de la palabra oculta los aciertos
    for (let i = 0; i < arrPalabraClave.length; i++){
        
        if(arrPalabraClave[i]==letra){
            
            arrPalabraOculta[i] = "  " + letra + "  ";
            acierto = true;
        }
    }
    

    // Tras el bucle, valoramos las 4 posibilidades:
    
    // 1) Si no hay guiones en la palabra oculta (verificarArrPalabraOculta()) 
    //    implicaría que la ha acertado (ha puesto todas las letras una a una.)
    if(verificarArrPalabraOculta()){

        // No hay guiones -> está acertada
        document.getElementById("palabraOculta").innerHTML = "<br> ¡¡¡¡ ENHORABUENA !!!! <br> <h5> HAS ACERTADO LA PALABRA <br><br></h5><h1>" + arrPalabraClave.join("") + "</h1>";
        document.getElementById("dibujo").src = "img/ahorcadoOk.png";
        return;
    }
    
    
    // 2) Ha fallado la letra. Resta un intento, y acumula y muestra la variable letraFallada
    if (!acierto) {
        intentos--;
        letraFallada += letra + " ";
        document.getElementById("letraFallada").innerHTML = letraFallada;
        dibujo();
    } 
    
    // 3) No quedan más intentos. Acaba el juego y habilita/deshabilita botones para el inicio de un nuevo juego
    if (intentos == 0){
        document.getElementById("palabraOculta").innerHTML = "<br> EPIC FAIL !!!! <br> <h5> Se han acabado los intentos.<br><br>La palabra era: </h5><h1>" + arrPalabraClave.join("") + "</h1>";
        document.getElementById("letra").disabled = true;
        document.getElementById("resolver").disabled = true;
        document.getElementById("jugar").disabled = false;
        dibujo();
        
        // Paramos el tiempo de la letra
        clearTimeout(cronoOn);
        return;
    }else{
    // 4) Quedan intentos. Muestra la palabra oculta 
        document.getElementById("palabraOculta").innerHTML = arrPalabraOculta.join("");
        dibujo();
    }
        
    iniciarCronometro();    
    

    
        
    // finTiempo = setTimeout(finTiempoLetra, 10000);
}
    

// Función que comprueba si está acertada la palabra oculta comprobando si hay guiones o no.
function verificarArrPalabraOculta(){

    for(let i = 0; i<arrPalabraOculta.length; i++){
        
        // Conque haya un guión, no está acertada
        if (arrPalabraOculta[i] == " __ "){
            return false;
        }
    }
    // Ho hay ningún guión.
    return true;
}



// Función que al pulsar el botón resolver solicita una palabra "entera" para resolver de una vez
// Si no la acierta, se acaba el juego aunque le queden intentos.
function resolver(){
    
    // Pide la palabra a resolver al usuario
    let palabra = prompt("Indica la palabra a resolver");

    // Pasamos a mayúsculas para comparar con la palabra clave
    palabra = palabra.toUpperCase(); //Mayúsculas

    // Pasamos como parámetro la palabra en la funció que valida que sea texto.
    texto = validarResolver(palabra);
    
    // Ingresamos la palabra en un array
    let arrPalabraResolver = palabra.split(""); 
    
    // Bucle que compara carácter a carácter la palabra a resolver y la palabra clave 
    for (let i = 0; i < arrPalabraClave.length; i++){
        
        if(arrPalabraClave[i] != arrPalabraResolver[i]){
            
            // Con que haya una única letra diferente, ya ha perdido la partida y se resetan los botones para el inicio de una nueva partida.
            document.getElementById("palabraOculta").innerHTML = "<br> EPIC FAIL !!!! <br> <h5> No has acertado.<br><br>La palabra era: </h5><h1>" + arrPalabraClave.join("") + "</h1>";
            
            document.getElementById("letra").disabled = true;
            document.getElementById("resolver").disabled = true;
            document.getElementById("jugar").disabled = false;
            document.getElementById("dibujo").src = "img/ahorcado0.png";
            return;
        }
        
    }

    // Si sale del bucle implica que todas las letras son iguales. Ha acertado la palabra. Se resetean botones para el inicio de una nueva partida
    document.getElementById("palabraOculta").innerHTML = "<br> ¡¡¡¡ ENHORABUENA !!!! <br> <h5> HAS ACERTADO LA PALABRA <br><br></h5><h1>" + arrPalabraClave.join("") + "</h1>";
   
    document.getElementById("letra").disabled = true;
    document.getElementById("resolver").disabled = true;
    document.getElementById("jugar").disabled = false;
    document.getElementById("dibujo").src = "img/ahorcadoOk.png";
}



// Función que muestra el dibujo según el valor de la variable intentos y el nombre de la imagen a mostrar.
function dibujo(){

    document.getElementById("dibujo").src = "img/ahorcado"+intentos+".png";

}



// Función que valida que la letra introducida es solo texto y que sólo es un carácter.
function validarLetra(texto){

    let esLetra = false;

    //Control: que sea una letra y solo una. Tiene en cuenta su código ascii para cribar y descartar lo que no es texto (del 65 al 90 --> A-Z mayúsculas y 209 Ñ).
    while(!esLetra){

        if(texto.length > 1){
            texto = prompt("Has introducido más de un carácter. Vuelve a probar.Si quieres resolver, cancela y pulsa el botón resolver").trim() ;
            texto = texto.toUpperCase();
            continue;
        }else if(texto == null || (texto == '') || ((texto.charCodeAt(0) < 65) || ((texto.charCodeAt(0) > 90) && (texto.charCodeAt(0) != 209)))){
            texto = prompt("No has introducido una letra. Vuelve a probar").trim() ;
            texto = texto.toUpperCase();
            continue;
        }else{
            esLetra = true;
            return texto;
        }
        
    }
}


// Función que comprueba que al querer resolver la palabra es solo texto 
function validarResolver(texto){

    let esPalabra = false;

    // Bucle que recorre los dígitos y verifica que es solo texto

    while(!esPalabra){

        for (let i = 0; i <= texto.length; i++){
            
            if((texto.charCodeAt(i) < 65) || ((texto.charCodeAt(0) > 90) && (texto.charCodeAt(0) != 209))){
                
                texto = prompt("Has introducido valores que no son letras. Vuelve a probar").trim();
                texto = texto.toUpperCase();
                i = -1;
                continue;
                
            }else if(texto == null || (texto == '')){
                
                texto = prompt("No has introducido ningún valor. Vuelve a probar").trim();
                texto = texto.toUpperCase();
                i = -1;
                continue;
                
            }else{
            }
        }
        esPalabra = true;
    }
    return texto;
        
        
}

function finTiempoLetra(){
    
    intentos--;
    
    if (intentos == 0){
        document.getElementById("palabraOculta").innerHTML = "<br> EPIC FAIL !!!! <br> <h5> Se han acabado los intentos.<br><br>La palabra era: </h5><h1>" + arrPalabraClave.join("") + "</h1>";
        document.getElementById("letra").disabled = true;
        document.getElementById("resolver").disabled = true;
        document.getElementById("jugar").disabled = false;
    }
    
    dibujo();

    // Iniciamos el tiempo de la letra
    iniciarCronometro();


}

// CRONOMETRO
function elCronometro(){
    

    // Variables que guarda cada valor temporal de 'tiempo'
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();
    milisegundos = tiempo.getMilliseconds();

    
    
        
    tiempo.setSeconds(segundos - 1) ;
    
    formatoCronometro();
    cronometro = (minutos + ':' + segundos);
    
    displayLetra.innerHTML = cronometro;

    if(segundos == 0){
        clearTimeout(cronoOn);
        finTiempoLetra();
    }

    
}


// Método que que ejecuta 'elCronometro()' cada segundo
function iniciarCronometro(){

    // Iniciamos 'tiempo' y ponemos display a 01:00,000
    tiempo = new Date(0,0,0,0,0,9);
    
    displayLetra.innerHTML = '00:10';
    
    cronoOn = setInterval(elCronometro, 1000);
    
}

// Método que resetea a valores iniciales 
function resetCronometro(){
    
    
    // Iniciamos 'tiempo' y ponemos display a 01:00,000
    tiempo = new Date(0,0,0,0,0,9);
    
    displayLetra.innerHTML = '00:10';
    
}




// Función que da formato con ceros delante si sólo tiene un dígito
function formatoCronometro(){

    if(horas<10){horas = '0' + horas;}            
    if(minutos<10){minutos = '0' + minutos;}
    if(segundos<10){segundos = '0' + segundos;}
    if(milisegundos<100){milisegundos = '0' + milisegundos;}

}

