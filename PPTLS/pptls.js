// Variables globales

// Array que acumula cada una de las posibles opciones
let opcion = ['piedra', 'papel', 'tijeras', 'lagarto', 'spock'];

// Captura el texto introducido por el usuario en el prompt
let eleccion = "";

// Contiene la opción random que elige la máquina
let eleccionMaquina = "";

// Contiene el nombre del usuario al iniciar el juego
let nombre = "";

// Array con las combinaciones ganadoras del jugador concadenadas.
arrWin=['tijeraspapel', 'papelpiedra', 'piedralagarto', 'lagartospock', 'spocktijeras', 'tijeraslagarto', 'lagartopapel', 'papelspock', 'spockpiedra', 'piedratijeras'];

// Acumula rondas ganadas
let jugadorWin=0;
let maquinaWin=0;

// Elementos
let bJuego = document.getElementById("bJuego");
let finJuego = document.getElementById("finJuego");
let resultado = document.getElementById("resultado");
let marcadorJugador = document.getElementById("marcadorJugador");
let marcadorMaquina = document.getElementById("marcadorMaquina")
let tituloMarcador = document.getElementById("tituloMarcador")




// FUNCIONES

/*
    // Método que inicia un juego
        - Empieza un nuevo juego i/o ronda.
        - Resetea marcadores si es un juego nuevo
        - Ejecuta una 'ronda()'
*/
    function juego(){

        // Comprobamos si es una partida nueva o empezada.
        if(nombre==""){
            
            // Reseteamos valores
            jugadorWin = 0;
            maquinaWin = 0;
            
            // Capturamos el nombre y lo ponemos como título del marcador del jugador
            nombre = prompt("Indica tu nombre");
            tituloMarcador.innerHTML = nombre.toUpperCase().slice(0, 8);// Mayúsculas y los primeros 8 caracteres.
        }
        
        // Cambiamos el texto del botón para futuras rondas
        bJuego.textContent = "Nueva Ronda";
        finJuego.disabled = false;
        
        
        // Empezamos una ronda
        ronda();
        
    } 
    
    
    /*
    // Método que inicia una ronda
    
    - Obtiene elección del jugador
    - Obtiene elección de la máquina
    - Comparar las elecciones
    - Muestra resultado y actualiza marcadores
    */
   function ronda(){
       
        // Pedidmos la opción
        eleccion = prompt("¿Qué opción eliges?")

        // capturamos la opción de dentro del texto insertado y extraemos la opción devuelta por la función 'buscaEleccion()'
        eleccion = buscaEleccion();

        // Asignamos una opción aleatoria para la máquina
        eleccionMaquina = opcion[Math.floor(Math.random() * 4)];

        // Mostramos las imágenes de cada opción elegida
        document.getElementById("imagenJugador").src = 'img/' + eleccion + '.png';
        document.getElementById("imagenMaquina").src = 'img/' + eleccionMaquina + '.png';

        // ANALIZAMOS LAS DOS OPCIONES
        // Primero miramos si son iguales para volver a empezar en caso afirmativo
        if(eleccion == eleccionMaquina){

            resultado.innerHTML = "<h1>¡EMPATE!</h1><br /> Vuelve a probar.";
            return;
            
        }else{
            
        // Si no son iguales, comparamos las dos opciones concadenadas con cada una de las posiciones del array de combinaciones ganadoras
            for (let i = 0; i < arrWin.length; i++) {
                
                if(eleccion + eleccionMaquina == arrWin[i]){
                    // aumentamos puntuación jugador
                    jugadorWin++;
                    
                    // Mostramos resultado en pantalla
                    resultado.innerHTML = "Has escogido " + eleccion + " y la máquina escogió " + eleccionMaquina + 
                    "<br /> <h1>¡¡¡Has ganado la ronda!!! </h1>";
                    
                    marcadorJugador.innerHTML = jugadorWin;
                    return;
                }
            }
        }

        // Si no ha entrado en la condición de iguales ni en el bucle de combinaciones ganadoras, es una combinación perdedora
        
        // Aumentamos puntuación de la máquina, mostramos el mensaje y actualizamos su marcador
        maquinaWin++;
        resultado.innerHTML = "Has escogido " + eleccion + " y la máquina escogió " + eleccionMaquina + 
                "<br /> <h1>¡¡¡Has Perdido la ronda!!! </h1>";
        marcadorMaquina.innerHTML = maquinaWin;
        
    }



    // Función que analiza el texto introducido por el jugador y extrae y retorna una de las posibles opciones.
    function buscaEleccion(){

        // Variable semáforo para salir del bucle
        let encontrada = false;

        while(!encontrada){

            eleccion = eleccion.toLowerCase();// Convertimos en minúsculas para asegurar poder comparar con certeza
            
            // Bucle que recorre el array de las opciones en busca de alguna de ellas y su posición. 
            for (let i = 0; i < opcion.length; i++) {
                
                if (eleccion.indexOf(opcion[i]) != -1){
                    
                    alert("Se ha encontrado " + opcion[i].toUpperCase() + " en la posición " + eleccion.indexOf(opcion[i]));
                    encontrada = true;
                    return opcion[i];
                }
                
            }

            // Si sale del for sin retornar nada, es que no hay ninguna de las opciones en el texto introducido.
            eleccion = prompt("No se ha encontrado ninguna opción. Vuelve a probar.");

            }
    }
    
// EVENTOS/LISTENERS
bJuego.addEventListener('click', juego, false);
    
    