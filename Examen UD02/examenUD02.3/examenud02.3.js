// Array donde almacenamos las letras
let arrLetras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Primer bucle que recorre la primera tanda con cada una de las letras
for (let i = 1; i <= 26; i++) {
    
    document.getElementById("lista").innerHTML += i + "-" + arrLetras[i-1] + "<br>";
    
}

// Segundo bucle que recorre la segunda tanda de letras añadiendo la a
for (let i = 27; i<=52; i++) {
    
    document.getElementById("lista").innerHTML += i + "- a" + arrLetras[i-27] + "<br>";
    
}