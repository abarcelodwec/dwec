//Variables
let resto = [];
let arrayM = [];
let arrayS = [];
let veces = 0;

//Pedir un número al usuario
let numero = prompt("Introduce un número de 4 dígitos que no contenga todos sus dígitos iguales");
// numero = parseInt(numero);

validarCodigo();
        
//Título para sacar por pantalla el número original      
document.getElementById("titulo").innerHTML += numero;

//Crear array del número.
numero = Array.from(String(numero), String);

while(resto != 6174){
    
    //Ordenamos array de Strings
    arrayS = numero.sort().slice();
    arrayM = numero.reverse().slice();
    
    //Pasamos a números los strings para operar con ellos
    let minuendo = parseInt(arrayM[0] + arrayM[1] + arrayM[2] + arrayM[3]);
    let sustraendo = parseInt(arrayS[0] + arrayS[1] + arrayS[2] + arrayS[3]);
    
    //Por si se han repetido tres dígitos en el número
    if(minuendo == 999){
        minuendo = 9990
    }
    
    resto = minuendo - sustraendo;
    
    //Convertimos en un array de string el número resultante para volver a proceder.
    
    numero = Array.from(String(resto), String);
    
    //Contador
    veces++;
    
    //Imprimir tabla por pantalla y consola.
    
    console.log(minuendo + "-" + sustraendo + "=" + resto);
    
    document.getElementById('tbody').innerHTML 
    += "<td>" + veces + "</td>" 
    +  "<td>"+ minuendo + "</td>" 
    +  "<td>" + sustraendo + "</td>"
    +  "<td>" + resto + "</td>"
    ;
    
    
}

//Validar código (NaN, null (botón cancelar del prompt), no tiene 4 dígitos o todos los dígitos iguales)
function validarCodigo(){

    let codigoValido = false;

    while(!codigoValido){

        if(numero == null){

            numero = prompt("El campo no puede estar vacío. Introduce un número de 4 dígitos que no tenga todos sus dígitos iguales.");
            continue;

        }else if(isNaN(numero)){
            
            numero = prompt("No has introducido un número válido. Introduce un número de 4 dígitos que no tenga todos sus dígitos iguales.");
            continue;

        }else if(numero.toString().length != 4){
            
            numero = prompt("El número debe contener exactamente 4 dígitos");
            continue;

        }else if(!(verificarCodigo(numero.toString()))){
            
            numero = prompt("El número no debe contener todos sus números iguales!!!");
            continue;

        }else{
            
            codigoValido = true;
        }
        
    }
    
}

//Funcion para verificar que el código no contiene todos sus dígitos iguales
function verificarCodigo(numero){
    for (let i = 0; i < numero.length; i++){
        for (let j = i+1; j < numero.length; j++){
            //Con que haya uno diferente, ya es válido.
            if(numero[j] != numero[i]){
                return true; 
            }
        }
    }
    return false;
}