console.log(0.57 * (-1));

// Variables globales

// Guarda el tiempo en formato cronómetro que mostrará en el display.
let cronometro;

// guarda el setInterval() para pasarle el clearTiemout()
let cronoOn;

// Display del cronómerto
let display = document.getElementById("display");

// guarda el nombre que introduce el jugador
let nombreJugador = document.getElementById("nombreJugador");

// Guarda el objeto 'Date()'
let tiempo;

// Boolean para saber si el juego está activo
let isModoJuego = false;
let isModoJuegoPro = false;
let rondas = 0;
let rondasPRO = 0;
let arrRecord=[]; //Guarda el record

// Objeto que acumula el record
let record ={
    jugador:'',
    rondas:'',
    record:'',
    jugadorPRO:'',
    rondasPRO:'',
    recordPRO:'',
}

// guarda el nombre del jugador
let jugador = '';
let jugadorPRO = '';

// Guarda los límites tiempo del juego
let limiteTiempo = new Date(0,0,0,0,0,50); // Segundo 50
let limiteHoras = limiteTiempo.getHours();
let limiteMinutos = limiteTiempo.getMinutes();
let limiteSegundos = limiteTiempo.getSeconds();
let limiteMilisegundos = limiteTiempo.getMilliseconds();

let diferencia; //Guarda la diferencia del juego


// Guarda los valores individualmente de 'tiempo'
let horas;
let minutos;
let segundos;
let milisegundos;

// Acumula el número de vueltas al pulsar sobre el botón 'lap'

let vuelta = 1;
let cabTabla = document.getElementById("thead");
let tbody = document.getElementById("tbody");
let cabTablaPRO = document.getElementById("thPRO");
let tbodyPRO = document.getElementById("tbPRO");


// Botones
let iniciar = document.getElementById("iniciarCronometro");
let parar = document.getElementById("pararCronometro");
let reset = document.getElementById("resetCronometro");
let lap = document.getElementById("lapCronometro");
//Dropdown
let bJugar = document.getElementById("bJugar");
let jugar = document.getElementById("JugarCronometro");
let jugarPro = document.getElementById("jugarCronometroPro");


// Empieza reseteando tiempo, display
resetCronometro();


// mostrarRecord();


// Función que gestiona la variable 'tiempo' aumentando en 1 segundo cada vez que se ejecuta
// Imprime por pantalla 'tiempo' cada vez que se ejecuta (si no está en pausa).
function elCronometro(){
    

    // Variables que guarda cada valor temporal de 'tiempo'
    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();
    milisegundos = tiempo.getMilliseconds();

    
    // Aumentamos o disminuimos en un segundo 'tiempo' si es juego o no.
    if(isModoJuegoPro){

        lap.disabled = true;
        reset.disabled = true;
        
        tiempo.setMilliseconds(milisegundos - 10) ;
        
        // Paramos el display en el segundo 00:55
        if(segundos>54){
            
            // Ponemos ceros delante si sólo tiene un dígito
            formatoCronometro();
            
            // Asignamos valor y formato a imprimir a la variable 'cronometro'
            cronometro = (minutos + ':' + segundos + ',' + milisegundos);
            
        }
        
    }else if(isModoJuego){
        
        lap.disabled = true;
        reset.disabled = true;
        
        tiempo.setMilliseconds(milisegundos - 10) ;
        
        formatoCronometro();
        cronometro = (minutos + ':' + segundos + ',' + milisegundos);

    }else{
        
        tiempo.setMilliseconds(milisegundos + 10) ;
        // Ponemos ceros delante si sólo tiene un dígito
        formatoCronometro();
        
        // Asignamos valor y formato a imprimir a la variable 'cronometro'
        cronometro = (horas + ':' + minutos + ':' + segundos + ',' + milisegundos);
    }
    
    
    display.innerHTML = cronometro;
    
    
}


// Método que que ejecuta 'elCronometro()' cada segundo
function iniciarCronometro(){
    
    cronoOn = setInterval(elCronometro, 10);
    
    
    // Gestión de botones
    iniciar.disabled = true;
    parar.disabled = false;
    lap.disabled = false;
    reset.disabled = true;
    jugar.disabled = true;
    jugarPro.disabled = true;
}



// Función que detiene la ejecución de 'iniciarCronometro()'
function pararCronometro(){
    
    clearTimeout(cronoOn);

    // Gestión de botones
    iniciar.textContent = 'Seguir';
    iniciar.disabled = false;
    parar.disabled = true;
    reset.disabled = false;
    lap.disabled = true;
    jugar.disabled = true;
    jugarPro.disabled = true;
    
    
    // Cuando paramos el cronomertro, si es modo juego mostramos el resultado de la diferencia por pantalla
    if(isModoJuego || isModoJuegoPro){

        let captura=0;

        
        iniciar.disabled = true;
        iniciar.textContent = 'Inicio';

        let color;//variable para el formato de color si la diferencia es en positivo o negativo
        
        captura = segundos + (milisegundos/1000); 
        
        diferencia = (captura - 50); // Calcular diferencia

        diferencia = parseFloat(Math.round(diferencia * 100) / 100).toFixed(2); // redondear a 2 decimales

        
        // Según resultado: Si es 0 acertado, sino segun si es positivo o negativo le damos un formato de color específico.
        if(diferencia == 0){
            
            document.getElementById("resultado").innerHTML = "¡¡¡TOMA!!! <br> Lo has clavado! <br><h1 class='display-1' style=color:green>"+ diferencia + ",00</h1>";
            
        }else{

            if(diferencia > 0){

                color = '<h1 class="display-1" style=color:green>+';
                
            }else{
                
                color = '<h1 class="display-1" style=color:red>';

            }
            
            document.getElementById("resultado").innerHTML = "Te has quedado a <br>" + color + diferencia + '0';

        }


        
        // Uamentamos ronda según modo de juego
        
        if(isModoJuegoPro){
           
            rondasPRO++;

        }else{

            rondas++;
        }

        
        if(isRecord(diferencia)){

            crearCookie();

        }
        // Apagar botón y resetear modo juego
        jugar.disabled = false;
        jugarPro.disabled = false;
        
        lap.disabled = true;
    }
}

// Método que resetea a valores iniciales 
function resetCronometro(){
    
    
    // Iniciamos 'tiempo' y ponemos display a 00:00:00,000
    tiempo = new Date(0,0,0,0,0,0);
    
    display.innerHTML = '00:00:00,000';
    
    // LAPS
    // Reseteamos vuelta de juego
    vuelta = 1;
    cabTabla.innerHTML='';
    tbody.innerHTML=''; 
    cabTablaPRO.innerHTML='';
    tbodyPRO.innerHTML=''; 
    
    // JUEGOS
    // Reseteamos el jugador y las rondas
    jugador = '';
    jugadorPRO = '';
    rondas = 0;
    nombreJugador.innerHTML ='';
    isModoJuego = false;
    isModoJuegoPro = false;


    //Limpiar paneles 
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("titulo").innerHTML = "";
    document.getElementById("record").innerHTML = '';
    document.getElementById("recordPRO").innerHTML = '';
    document.getElementById("labelPRO").innerHTML = '';


    
    // Gestión de los botones
    parar.disabled = true;
    reset.disabled = true;
    iniciar.disabled = false;
    iniciar.textContent = 'Inicio';
    lap.disabled = true;
    jugar.disabled = false;
    jugarPro.disabled = false;
}


// Método que al pulsar el botón lap, introduce y muestra en una tabla el tiempo de ese momento,
// pero sin detener el cronómetro.
function lapCronometro(){

    // Imprimir cabecera de la tabla 1 vez
    if(cabTabla.innerHTML==''){

        cabTabla.innerHTML
        += '<tr>'
        + '<th scope="col">Lap</th>'
        + '<th scope="col">Tiempo</th>'
        + '</tr>'
        ;
    }
        
    // Añadir registros a un row de la tabla
    tbody.innerHTML 
    += "<td>" + vuelta + "</td>" 
    +  "<td>"+ cronometro + "</td>"
    ;
    
    vuelta++;
    
}

// Método que activa el tipo de juego 'normal' y lo inicia
// function jugarCronometro(){
    
// // Indicamos modo juego
// isModoJuego = true;
// isModoJuegoPro = false;

// // Etiqueta 'PRO' 
// document.getElementById("labelPRO").innerHTML = '';

// iniciarJuego();
    
// }


// Método que activa el tipo de juego 'PRO' y lo inicia
// function jugarCronometroPro(){

// isModoJuego = false;
// isModoJuegoPro = true;

// // Etiqueta 'PRO' 
// document.getElementById("labelPRO").innerHTML = '<div class="d-inline p-2 bg-danger text-white">PRO</div>'

// iniciarJuego();

    
// }

// Función que da formato con ceros delante si sólo tiene un dígito
function formatoCronometro(){

    if(horas<10){horas = '0' + horas;}            
    if(minutos<10){minutos = '0' + minutos;}
    if(segundos<10){segundos = '0' + segundos;}
    if(milisegundos<100){milisegundos = '0' + milisegundos;}

}


function crearCookie(){

    if(isModoJuegoPro){

        document.cookie = "rondasPRO=" + rondasPRO;
        document.cookie = "jugadorPRO=" + jugadorPRO;
        document.cookie = "recordPRO=" + diferencia;


    }else{
        
        document.cookie = "Rondas=" + rondas;
        document.cookie = "Jugador=" + jugador;
        document.cookie = "Record=" + diferencia;
    }


    mostrarRecord();

    // isModoJuego = false;
    // isModoJuegoPro = false;
    
}

// Muestra el actual capturando los valores de las cookies
function mostrarRecord(){
    
    // Obtenemos valores de las cookies
    leerRecord();



    //TABLA RECORD
     
    // Imprimir cabecera de la tabla 1 vez
     if(cabTabla.innerHTML==''){

        cabTabla.innerHTML
        += '<tr>'
        + '<th scope="col">Rondas</th>'
        + '<th scope="col">Jugador</th>'
        + '<th scope="col">Tiempo</th>'
        + '</tr>'
        ;
    }
        
        // Añadir registros al primer row de la tabla.
        tbody.innerHTML='';
        tbody.innerHTML 
        += "<td>" + record.rondas + "</td>" 
        +  "<td>"+ record.jugador + "</td>"
        +  "<td>"+ record.record + "</td>"
        ;
        



    // TABLA RECORD PRO

     // Imprimir cabecera de la tabla 1 vez
     if(cabTablaPRO.innerHTML==''){

        cabTablaPRO.innerHTML
        += '<tr>'
        + '<th scope="col">Rondas</th>'
        + '<th scope="col">Jugador</th>'
        + '<th scope="col">Tiempo</th>'
        + '</tr>'
        ;
    }
        
        // Añadir registros al primer row de la tabla.
        tbodyPRO.innerHTML='';
        tbodyPRO.innerHTML 
        += "<td>" + record.rondasPRO + "</td>" 
        +  "<td>"+ record.jugadorPRO + "</td>"
        +  "<td>"+ record.recordPRO + "</td>"
        ;
        

}

function leerRecord(){

    // Metemos en una variable todos los pares de valores cookies como cadena
    let cookieJuego = document.cookie;

    // Separamos cada una de las parejas de valores mediante el ';' y lo metemos en un array
    let arrCookie = cookieJuego.split(";");

    // Recorremos el array en busca de cada uno de los nombres de los valores.
    // Obtenemos el valor del par de valores
    // Metemos el valor en su atributo del objeto 'record' 
    for (let i = 0; i < arrCookie.length; i++) {

        if (arrCookie[i].indexOf('Jugador')!=-1){

            let vParCookie = arrCookie[i].substring(arrCookie[i].indexOf('=')+1);

            record.jugador = vParCookie;
        }
        
        if (arrCookie[i].indexOf('Rondas')!=-1){

            let vParCookie = arrCookie[i].substring(arrCookie[i].indexOf('=')+1);

            record.rondas = vParCookie;
        }
        if (arrCookie[i].indexOf('Record')!=-1){

            let vParCookie = arrCookie[i].substring(arrCookie[i].indexOf('=')+1);

            record.record = vParCookie;
        }
        if (arrCookie[i].indexOf('rondasPRO')!=-1){

            let vParCookie = arrCookie[i].substring(arrCookie[i].indexOf('=')+1);

            record.rondasPRO = vParCookie;
        }
        if (arrCookie[i].indexOf('recordPRO')!=-1){

            let vParCookie = arrCookie[i].substring(arrCookie[i].indexOf('=')+1);

            record.recordPRO = vParCookie;
        }
        if (arrCookie[i].indexOf('jugadorPRO')!=-1){

            let vParCookie = arrCookie[i].substring(arrCookie[i].indexOf('=')+1);

            record.jugadorPRO = vParCookie;
        }
    }
    
}

// Función que valida si el resultado obtenido es un record.
function isRecord(diferencia){

    let recordActual ='';

    // Convertimos a float para comparar
    diferencia = parseFloat(diferencia);

    // Miramos si no hay record y devolvemos true si no hay

    if(isModoJuegoPro){

        // Si no hay record --> Lo crearemos
        if(record.recordPRO==''){
            
            return true;
        }
        
        recordActual = parseFloat(record.recordPRO);
        
    }else{
        
        // Si no hay record --> Lo crearemos
        if(record.record==''){

            return true;
        }

        recordActual = parseFloat(record.record);

    }

    
    
    // si el record o el resultado son negativos, los pasamos a positivos para comparar
    if(diferencia<0){
        
        diferencia = diferencia * (-1);
    }

    if (recordActual<0){

        recordActual = recordActual * (-1);

    }
    
    // Comparamos y devolvemos true si el resultado es un record
    if(recordActual>=diferencia){
        
        return true;
    }

    
    // No es un record
    return false;

}

// Método que prepara los marcadores, records y bienvenida del jugador.
function iniciarJuego(){

    document.getElementById("resultado").innerHTML = '';
    document.getElementById("record").innerHTML = 'RECORD';
    document.getElementById("recordPRO").innerHTML = 'RECORD (PRO)';
    
    mostrarRecord();
    
    // Pide el nombre del jugador para la bienvenida
    if(jugador == '' && jugadorPRO == ''){

        jugadorPRO = prompt("Introduce tu nombre");
        
    }else if(jugador == '' && jugadorPRO != ''){
        
        jugador = jugadorPRO;
        
    }else if(jugador != '' && jugadorPRO == ''){
        
        jugadorPRO = jugador;
    }
    
    nombreJugador.innerHTML = "Bienvenido " + jugadorPRO;
    
    // Iniciamos 'tiempo' y ponemos display a 00:01:00,000
    tiempo = new Date(0,0,0,0,1,0);
    
    display.innerHTML = '01:00,000';
    
    document.getElementById("titulo").innerHTML = "Detiene el cronómetro <br> en el segundo 00:50,000";
    
    setTimeout(iniciarCronometro, 3000);
    
    // Gestion botones
    lap.disabled = true;
    jugar.disabled = true;
    iniciar.disabled = true;
    jugarPro.disabled = true;


}

// Listeners

iniciar.addEventListener('click', iniciarCronometro, false);
parar.addEventListener('click', pararCronometro, false);
reset.addEventListener('click', resetCronometro, false);
lap.addEventListener('click', lapCronometro, false);

// Se ejecuta si el juego es 'Normal'
jugar.addEventListener('click', 
                        function(){
                            
                            // Indicamos modo juego
                            isModoJuego = true;
                            isModoJuegoPro = false;
                            
                            // Etiqueta 'PRO' 
                            document.getElementById("labelPRO").innerHTML = '';
                            
                            iniciarJuego();
                            
                        }, 
                        false
);

// Se ejecuta si el juego es 'PRO'
jugarPro.addEventListener('click',

                            function(){
                                isModoJuego = false;
                                isModoJuegoPro = true;
                                
                                // Etiqueta 'PRO' 
                                document.getElementById("labelPRO").innerHTML = '<div class="d-inline p-2 bg-danger text-white">PRO</div>'
                                
                                iniciarJuego();

                            },
                            false
);
