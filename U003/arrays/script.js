let datos = [13, -5, -9, 0, 8, 0, 2];

//filter
function natural(dato){

    return dato >= 0;
}

console.log(datos);
// console.log(datos.filter(natural));

// Find()
// console.log(datos.find(natural));


// forEach()


let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
// let texto = document.getElementById("texto");

// function miTexto(item, index){

    //     texto.innerHTML += "index[" + index + "]: " + item + "<br>";
    // }
    
    // dias.forEach(miTexto);
    
    // includes()
    
// let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
// console.log(datos.includes(-9));
// console.log(datos.includes('miercoles'));

// console.log(datos.indexOf(-5)); 
// console.log(datos.lastIndexOf(0)); 

// pop()
let ultimo = datos.pop();
console.log(ultimo);
console.log(datos);

// push()

let valor = datos.push(87);
let datos2 = [100, 200, 300];
datos.push(...datos2);
console.log(datos);
console.log(valor); //Devuelve posición

// shift()
let primero = datos.shift();
console.log(datos);
console.log(primero);

// slice()

let datos3 = datos.slice(2, 4);
console.log("datos3:" + datos3 );

// sort()