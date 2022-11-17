let numero = "";


// función que captura el número pulsado en la variable numero
function capturaNumero(){

    numero += this.value;
    console.log(numero);
}

// Eventos para botones

// Todos llamarán a la misma funcion

document.getElementById("ceroId").addEventListener('click', capturaNumero, false);
document.getElementById("unoId").addEventListener('click', capturaNumero, false);
document.getElementById("dosId").addEventListener("click", capturaNumero, false);
document.getElementById("tresId").addEventListener("click", capturaNumero, false);
document.getElementById("cuatroId").addEventListener("click", capturaNumero, false);
document.getElementById("cincoId").addEventListener("click", capturaNumero, false);
document.getElementById("seisId").addEventListener("click", capturaNumero, false);
document.getElementById("sieteId").addEventListener("click", capturaNumero, false);
document.getElementById("ochoId").addEventListener("click", capturaNumero, false);
document.getElementById("nueveId").addEventListener("click", capturaNumero, false);

document.getElementById("mostrar").addEventListener("click", nifConLetra, false);

function nifConLetra(){
    
    // Variables
    
    let nif = "";
    let resto = "";
    
    // Array de las letras
    
    let letras = ['T', 'R','W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
    let letraNIF = "";
    
    nif = numero;
    
    // Capturar elemento para dar feedback al usuario
    
    feedBack = document.getElementById("feedback");
    
    if(isNaN(nif)){
        feedBack.innerHTML = "Introduce un número";
    }else{
        
        nif = parseInt(nif);
        if(nif < 0 || nif > 99999999){
            
            
            feedBack.innerHTML = "Introduce un número entre 0 y 99999999";
        }else{
            
            resto = nif%23
            
            feedBack.innerHTML = nif + letras[resto];
            
        }
        
    }

    numero = "";
}