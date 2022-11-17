// Toni Barcelo Garcia
// 1 Escriu un programa que prengui com a entrada un nombre enter i indiqui quina quantitat cal sumar-li perquè el resultat sigui múltiple de 7.

const DIVIDENDO = 7;


// Función que calcula cuál es el siguiente múltiplo de 7 del valor introducido
function validarModulo(){

    // captura del valor introducido
    let divisor = document.getElementById("texto").value;
    
    
    // Validar que se ha introducido un número y lo vuelve a pedir en caso contrario
    divisor = validaresNumero(divisor);
    
    // Convertimos a número el valor
    divisor = parseInt(divisor);

    //Insertamos el valor final por si no era el original si no fuese correcto
    document.getElementById("texto").value = divisor;

    // Calculamos el módulo de 7 del valor introducido
    let modulo = divisor % DIVIDENDO;

    // Obtenemos el número a sumar para el siguiente múltiplo de 7 restádole el módulo obtenido a 7
    let resultado = DIVIDENDO - modulo;
    
    // Mostramos resultado y calculamos el ejemplo como verificación
    document.getElementById('resultado').innerHTML = "Hay que sumar <h1 style = color:red;>" + resultado + "</h1>" + " a <b>" + divisor + "</b>" +  " para que sea múltiplo de " + DIVIDENDO;
    document.getElementById('ejemplo').innerHTML = divisor + " + " + resultado + " = " + (divisor + resultado) + " / " + DIVIDENDO + " = " + (divisor + resultado)/DIVIDENDO;

}



// Limpieza del textArea, resultado y ejemplo.
function limpieza(){
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('texto').value = '';
    document.getElementById('ejemplo').value = '';
}


//Función que valida que el número insertado no es nulo, no es NaN o no inserta nada
function validaresNumero(numero){

    let numeroValido = false;

    //Control: no sale del bucle hasta que es exclusivamente un núemro. 
    while(!numeroValido){

        if(numero == null || (isNaN(numero)) || numero == ''){
            numero = prompt("No has introducido un número. Vuelve a probar").trim();
        }else{
            numeroValido = true;
            return numero;
        }
        
    }

}