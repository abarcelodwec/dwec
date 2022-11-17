// Iniciamos variables
        
// Captura la respuesta del usuario
let resposta = "";

// Separar en dos variables nombre y apellido para poder saber cuál ha acertado
let palabraClaveNombre = 'toni';
let palabraClaveApellido = 'barcelo';

// Variable que verifica que ha acertado los dos nombres
let acierto = false;

// Array que acumula la respuesta del usuario
let arrResposta=[];


// Bucle per mostrar la pregunta hasta que se introducta la palabra clave

while (!acierto){

    pedirNombre();

    if((arrResposta[0] != palabraClaveNombre) && (arrResposta[1] != palabraClaveApellido) ){

        alert("ERROR, inténtalo de nuevo");
        pedirNombre();
        continue;
        
        
    }else if((arrResposta[0] == palabraClaveNombre) && (arrResposta[1] != palabraClaveApellido)){
        
        alert("Te falta el apellido");
        pedirNombre();
        continue;
        
        
        
    }else if ((arrResposta[0] != palabraClaveNombre) && (arrResposta[1] == palabraClaveApellido)){
        
        alert("Te falta el nombre");
        pedirNombre();
        continue;
    
    }else{
        
        acierto = true;

    }



}

document.getElementById("bienvenido").innerHTML = "Bienvenido!!"

// función que pide el nombre y apellido y introduce cada valor en una posicón de un array
// para poder comparar con la palabra calve
function pedirNombre(){

    resposta = prompt("nombre y primer apellido del mejor alumno de Ramis");

    resposta = resposta.toLowerCase(); //Evitar case sensitive
    
    arrResposta = resposta.split(" ");

}