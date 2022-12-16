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


// Cronómetros
let cronometro; // Guarda el tiempo en formato cronómetro que mostrará en el display el tiempo total.
let cronometroLetra; // Cronómetro para el tiempo por letra

// guarda el setInterval() para pasarle el clearTiemout()
let cronoOn;
let cronoOnLetra;



// Elementos
// let displayLetra = document.getElementById("displayLetra"); //Crono para letra
const displayGeneral = document.getElementById("displayGeneral"); //Crono tiempo general
const palabraOculta = document.getElementById("palabraOculta"); 
const input = document.getElementById("input");
const dibujoAhorcado = document.getElementById("dibujo");
const recordTitulo = document.getElementById("recordTitulo");
const recordText = document.getElementById("recordText");
const panelJuego = document.getElementById("panelJuego");
const letraFalladaDisplay = document.getElementById("letraFalladaDisplay");

// Guarda el objeto 'Date()'
let tiempo;
let tiempoLetra;

// Guarda los valores individualmente de 'tiempo'
let minutos;
let segundos;
let minutosLetra;
let segundosLetra;

// Botones
const bResolver = document.getElementById("resolver");

// Listener de los diferentes botones
document.getElementById("jugar").addEventListener("click", jugar, false);
bResolver.addEventListener("click", resolver, false);

input.addEventListener("keydown", (e) => {

    if(e.key === 'Enter'){
        intentoLetra()
    }
});



// Al inicio solo está activo el botón jugar y Salir
bResolver.disabled = true;
dibujoAhorcado.src = "img/LogoRamis.jpg";



// Función que prepara un nuevo juego y queda a la espera del usuario para que intervenga
function jugar(){

    // Mostramos el panel de juego
    panelJuego.hidden = false;

    // Habilitamos input por si lo hemos deshabilitado al acabar una partida anterior
    input.disabled = false;
    input.value = "";
    input.focus();


    // Iniciamos el tiempo de la letra y el tiempo general
    iniciarCronometro();
    iniciarCronometroLetra();

    
    
    // Reseteamos intentos, letras falladas, records y array de la palabra oculta de posibles partidas anteriores.
    intentos = 7;
    letraFallada = "Falladas: ";
    arrPalabraOculta = [];
    letraFalladaDisplay.innerHTML = "";    
    recordTitulo.innerHTML="";

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
    palabraOculta.innerHTML = arrPalabraOculta.join("");
    
    // Habilita el botón esolver y deshabilita el botón jugar
    bResolver.disabled = false;
    document.getElementById("jugar").disabled = true;
}


// Función de intento de letra que compara la letra insertada con la palabra clave
function intentoLetra (){
    
    // Paramos el tiempo de la letra
    clearTimeout(cronoOnLetra);

    // Para controlar si ha habido aciertos o no
    let acierto = false;

    // Pedimos letra al usuario
    let letra = input.value;
    
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
        partidaGanada();
        return;
    }
    
    
    // 2) Ha fallado la letra. Resta un intento, y acumula y muestra la variable letraFallada
    if (!acierto) {
        intentos--;
        letraFallada += letra + " ";
        letraFalladaDisplay.innerHTML = letraFallada;
        input.value="";
        dibujo();
    } 
    
    // En este punto, comprobamos los intentos
    // 3) No quedan más intentos. Acaba el juego.
    if (intentos == 0){
        partidaPerdida();
        return;
    }else{
    // 4) Quedan intentos. Muestra la palabra oculta 
        palabraOculta.innerHTML = arrPalabraOculta.join("");
        dibujo();
        input.value="";
        input.select();
        iniciarCronometroLetra();    
    }
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
    let palabra = prompt("-INTRODUCE LA PALABRA A RESOLVER- \n Ten en cuenta que sólo tienes un intento").trim();

    // Pasamos a mayúsculas para comparar con la palabra clave
    palabra = palabra.toUpperCase(); //Mayúsculas

    // Pasamos como parámetro la palabra en la funció que valida que sea texto.
    texto = validarResolver(palabra);
    
    // Ingresamos la palabra en un array
    let arrPalabraResolver = palabra.split(""); 
    
    // Bucle que compara carácter a carácter la palabra a resolver y la palabra clave 
    for (let i = 0; i < arrPalabraClave.length; i++){
        
        if(arrPalabraClave[i] != arrPalabraResolver[i]){
            
            // Con que haya una única letra diferente, ya ha perdido la partida.
            partidaPerdida();
            dibujoAhorcado.src = "img/ahorcado0.png";
            return;
        }
        
    }

    // Si sale del bucle implica que todas las letras son iguales. Ha acertado la palabra.
    partidaGanada();
}



// Función que muestra el dibujo según el valor de la variable intentos y el nombre de la imagen a mostrar.
function dibujo(){

    dibujoAhorcado.src = "img/ahorcado"+intentos+".png";

}



// Función que valida que la letra introducida es solo texto y que sólo es un carácter.
function validarLetra(texto){

    let esLetra = false;

    //Control: que sea una letra y solo una. Tiene en cuenta su código ascii para cribar y descartar lo que no es texto (del 65 al 90 --> A-Z mayúsculas y 209 Ñ).
    while(!esLetra){

        if(texto.length > 1){
            texto = alert("Has introducido más de un carácter. Vuelve a probar.Si quieres resolver, cancela y pulsa el botón resolver").trim() ;
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

// Función que se ejecuta al acabar el tiempo de la letra. Resta intento e inicializa el cronómetro de la letra
function finTiempoLetra(){
    
    intentos--;
    dibujo();
    resetCronometroLetra();
    iniciarCronometroLetra();
    
    if (intentos == 0){
        partidaPerdida();
    }
    



}

// Función que determina el final de la partida como perdedor
function partidaPerdida(){

    // Texto que anuncia el final de la partida como perdedor

    document.getElementById("palabraOculta").innerHTML = "<br> EPIC FAIL !!!! <br> <h5> Se han acabado los intentos.<br><br>La palabra era: </h5><h1>" + arrPalabraClave.join("") + "</h1>";
        bResolver.disabled = true;
        document.getElementById("jugar").disabled = false;
        dibujo();

        // Paramos el tiempo de la letra y el general
        clearTimeout(cronoOn);
        clearTimeout(cronoOnLetra);
        resetCronometroLetra();

        // Impedimos que se pueda introducir nada en el input.
        input.disabled = true;

}

// Función que determina el final de la partida como ganador
function partidaGanada(){

    // Texto que anuncia el final de la partida como ganador

    palabraOculta.innerHTML = "<br> ¡¡¡¡ ENHORABUENA !!!! <br> <h5> HAS ACERTADO LA PALABRA <br><br></h5><h1>" + arrPalabraClave.join("") + "</h1>";
   
    bResolver.disabled = true;
    document.getElementById("jugar").disabled = false;
    dibujoAhorcado.src = "img/ahorcadoOk.png";

    // Impedimos que se pueda introducir nada en el input.
    input.disabled = true;


    // Paramos el tiempo de la letra y general
    clearTimeout(cronoOn);
    clearTimeout(cronoOnLetra);
    resetCronometroLetra();

    // Verificamos si ha hecho un récord.
    guardarRecordPalabra();

}


// Función que comprueba si hay un récord en la palabra resuleta y lo muestra por pantalla si lo es.
function guardarRecordPalabra(){

    let recordPalabraResuelta = localStorage.getItem(arrPalabraClave.join(""));

    if ((recordPalabraResuelta == null) || ((minutos + segundos) < recordPalabraResuelta)){

        localStorage.setItem(arrPalabraClave.join(""), minutos + segundos);
        recordTitulo.innerHTML = "NUEVO RECORD!";
        recordText.innerHTML = minutos + ":" + segundos;
    }


}

// CRONOMETROS
    // GENERAL
        function elCronometro(){

        // Variables que guarda cada valor temporal de 'tiempo'
            minutos = tiempo.getMinutes();
            segundos = tiempo.getSeconds();
                
            tiempo.setSeconds(segundos + 1) ;
            
            formatoCronometro();
            cronometro = (minutos + ':' + segundos);
            
            displayGeneral.innerHTML = cronometro;

        }
        // Método que que ejecuta 'elCronometro()' cada segundo
        function iniciarCronometro(){

            // Iniciamos 'tiempo' y ponemos display a 00:00
            tiempo = new Date(0,0,0,0,0,0);
            
            displayGeneral.innerHTML = '00:00';
            
            cronoOn = setInterval(elCronometro, 1000);
            
        }

        // Método que resetea a valores iniciales 
        function resetCronometro(){
            
            
            // Iniciamos 'tiempo' y ponemos display a 00:00,000
            tiempo = new Date(0,0,0,0,0,0);
            
            displayGeneral.innerHTML = '00:00';
            
        }

    // LETRA
        // Método que inicia el cronómetro de la letra restandole un segundo cada vez que se ejecuta.
        function elCronometroLetra(){

            // Variables que guarda cada valor temporal de 'tiempo'
            minutosLetra = tiempoLetra.getMinutes();
            segundosLetra = tiempoLetra.getSeconds();
                        
            tiempoLetra.setSeconds(segundosLetra - 1) ;
                    
            formatoCronometroLetra();
            cronometroLetra = (minutosLetra + ':' + segundosLetra);

            // Pinta cada <div> añadiendo la clase 'pintao'

            if(document.querySelector(".cuadroProgreso:not(.pintao)") != null){
                
                let cuadroProgreso = document.querySelector(".cuadroProgreso:not(.pintao)");
                
                cuadroProgreso.classList.add('pintao');
                
            }

            if(segundosLetra == 0){
                clearTimeout(cronoOnLetra);
                finTiempoLetra();
            }
        }

        // Resetea el cronómetro de la letra en 10 segundos y la barra de progreso y vuelve a ejecutar el cronómetro de la letra 
        function iniciarCronometroLetra(){

            resetCronometroLetra();
            cronoOnLetra = setInterval(elCronometroLetra, 1000);
        }
        
        // Método que resetea a valores iniciales 
        function resetCronometroLetra(){
            
            // Iniciamos 'tiempo' y ponemos display a 01:00,000
            tiempoLetra = new Date(0,0,0,0,0,10);

            // 'Borra' la barra de progreso quitando la clase 'pintao' de todos los <div> 
            
            let losPintaos = document.querySelectorAll(".cuadroProgreso.pintao");

            losPintaos.forEach((e) => {
                e.classList.remove('pintao');
            });
            
        }


// Función que da formato con ceros delante si sólo tiene un dígito
function formatoCronometro(){

    if(minutos<10){minutos = '0' + minutos;}
    if(segundos<10){segundos = '0' + segundos;}

}
function formatoCronometroLetra(){

    if(minutosLetra<10){minutosLetra = '0' + minutosLetra;}
    if(segundosLetra<10){segundosLetra = '0' + segundosLetra;}

}

