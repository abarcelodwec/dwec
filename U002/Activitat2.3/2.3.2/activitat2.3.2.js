// Toni Barceló Garcia
// 2.3.2. Presentar en la pàgina el text “JavaScript” en els 6 diferents tipus de capçalera HTML, de major a menor.


// Listener para botones que llaman a las funciones
document.getElementById("decreciente").addEventListener("click", decreciente, false);
document.getElementById("creciente").addEventListener("click", creciente, false);



// Funcion para que cuando pulsen el botón creciente el título vaya de menor a mayor
function creciente(){
    
    document.getElementById("titulo").innerHTML = "";
    
    for(let i = 6; i !=0; i--){
        
        document.getElementById("titulo").innerHTML +=
        
            "<h" + i +">JavaScript</h" + i + ">";
        }
        
    }


// Funcion para que cuando pulsen el botón decreciente el título vaya de mayor a menor
function decreciente(){

        document.getElementById("titulo").innerHTML = "";
        
    for(let i = 1; i !=7; i++){
        
            document.getElementById("titulo").innerHTML +=
        
            "<h" + i +">JavaScript</h" + i + ">";
        }

    }



