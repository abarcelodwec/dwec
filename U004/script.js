const comprova = document.getElementById("apagaelmovil");
const missatge = document.getElementById("missatge");
const aqui = document.getElementById("aqui");

comprova.addEventListener("click", (e) => {

    missatge.innerHTML ="";

    let x = aqui.value;

    try {
        
        if (x == "") throw "Está vacío";
        if (isNaN(x)) throw "No es un número";
        if (x < 5 ) throw "Tiene que ser mayor que 5";
        if (x > 10 ) throw "Tiene que ser menor que 10";

    } catch (error) {

        missatge.innerHTML = "Ha habido un error: " + error;
        
    }

}, false)
