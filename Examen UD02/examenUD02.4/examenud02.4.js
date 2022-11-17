
// Array de las letras

let letras = ['T', 'R','W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Pedir número al usuario
let numero = prompt("Introduce un número de DNI para calcular la letra").trim();

numero = validarNumero(numero);

// Calculamos resto
let resto = numero%23;


// Mostar el número por pantalla añadiendo la letra
document.getElementById("nif").innerHTML = numero + letras[resto];










// función que valida que el valor introducido es un número y está entre 0 y 99999999
function validarNumero(numero){

    // no sale del bucle hasta que sea un número
    let numeroValido = false;

    //Control: si no es un número, es null o no está entre 0 y 99999999
    while(!numeroValido){

        if(numero == null || (isNaN(numero) || numero == '' || numero < 0 || numero > 99999999)){
            numero = prompt("No has introducido un número correcto. Vuelve a probar").trim() ;
            continue;
        }else{
            
            numeroValido = true;
        }
        
    }
    return numero;
    
}

function rellenarCadena(numero){

    if (numero < 9999999 ){




    }



}