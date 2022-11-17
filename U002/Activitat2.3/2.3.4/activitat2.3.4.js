// Toni Barcelo Garcia
// 4 Definir una funció a la qual se li passa com a argument una cadena.
// La funció determina si aquesta cadena està formada només per majúscules, només per minúscules o per una mescla d'ambdues.


// FUNCTIONS

// Función para la validación de mayúsculas y minúsculas.
// Compara carácter a carácter el texto introcido con el mismo texto todo en mayúsculas.
function validarTexto(){
    
    let texto = document.getElementById("texto").value;
    
    // Pasar a array para comparar carácter por carácter
    let arrT = texto.split("");

    //Pasar e mismo texto a mayúsculas y ponerlo en un array para comparar entre arrays.
    texto = texto.toUpperCase();
    let arrTMayusculas = texto.split("");
    
    // Inicializar contadores de si el texto intrducido está en mayúsculas o minúsculas
    let mayusculas = 0;
    let minulsculas = 0;
    
    // Bucle que compara caracter del texto original con el mismo carácter convertido en mayúsculas
    for (let i = 0; i < arrT.length; i++){

        if((texto.charCodeAt(i) < 65) || ((texto.charCodeAt(i) > 90) && (texto.charCodeAt(i) != 209))){ //Descartar cualquier valor que no sea una letra 
            continue;
        
        }else if(arrT[i] == arrTMayusculas[i]){// Es mayúscula
            mayusculas++;
            
        }else{//minúscula por descarte
            
            minulsculas++;
        }
        
    }

    // Resolución según las mayúsculas o minúsculas detectadas

    //No hay letras en el texto
    if (mayusculas == 0 && minulsculas == 0){
        document.getElementById("resultado").innerHTML = "No hay ninguna letra en el texto";
        return;
    }
    
    // Todo minúsculas
    if (mayusculas == 0){
        
        document.getElementById("resultado").innerHTML = "Todas las letras están en minúsculas";
    
    // Todo mayúsculas
    }else if(minulsculas == 0){
        
        document.getElementById("resultado").innerHTML = "Todas las letras están en mayúsculas";
        
    // Tienen las 2
    }else{
        
        document.getElementById("resultado").innerHTML = "Las letras tienen mayúsculas y minúsculas";

    }

}

// Limpieza del textArea y resultado.
function limpieza(){
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('texto').value = '';
    document.getElementById('ejemplo').value = '';
}