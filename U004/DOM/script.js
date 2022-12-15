// const text = document.getElementById("text");
// const textTag = document.getElementsByTagName("strong");

// console.log(text.innerHTML);
// console.log(text.innerText);
// console.log(textTag[0]);

const boton = document.getElementsByTagName("button")[0];


function cuanQuemaoEstas(){

    let contador = 0;

    const formulario = document.forms["formulari"];

    const resultado = document.getElementById("resultado");
    const consejo = document.getElementById("consejo");

    let texto = "";
    let i;

    for (let i = 0; i < formulario.length; i++) {
        
        if(formulario.elements[i].checked){

            contador ++;
        }
    }

    resultado.innerHTML = "En principio vas bien, salvo que hayas marcado que eres merengón"

    if(contador > 3){

        resultado.innerHTML = "Deberías empezar a frenar un poco...";
    }
    if(contador > 5){

        resultado.innerHTML = "Si sigues así te quedan dos teledirarios";
    }
    if(contador > 7){

        resultado.innerHTML = "Cementerio cercano?";
    }
    if(contador == 10){

        resultado.innerHTML = "Debes ser un zombi ya... y del Madrid!";
    }


}

boton.addEventListener("click", (e)=> {
    e.preventDefault();

    cuanQuemaoEstas();
})