// Toni Barceló Garcia
//2.3.1. Sol·licitar un número i presentar la seva taula de multiplicar.

let factorial = prompt("Inserta número para calcular su factorial").trim();

validarFactorial(); //llama a la funció que verifica que no se introduzca un valor difrente a un número o Null

// Variable que almacena el resultado
let resultado = factorial;

// Título
document.getElementById('resultado').innerHTML += factorial + "! = " + factorial;


// Bucle que detenermina e imprime la correlación de números a multiplicar y acumula el resultado.
for(let i = 1; i < factorial; i++){
    resultado *= factorial - i;
    document.getElementById('resultado').innerHTML += " * " + (factorial - i);
}

// imprimir resultado
document.getElementById('resultado').innerHTML += " = " + resultado;




//Función para validar que el valor introducido en el prompt sea un núemro.
function validarFactorial(){

    // no sale del bucle hasta que sea un número
    let codigoValido = false;

    //Control: si no es un número o es null
    while(!codigoValido){

        if(factorial == null || (isNaN(factorial) || factorial == '')){
            factorial = prompt("No has introducido un número. Vuelve a probar").trim() ;
            continue;
        }else{
            
            codigoValido = true;
        }
        
    }
    
}