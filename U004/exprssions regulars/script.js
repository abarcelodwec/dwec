/*
RegExp


/patro/modificadors

*/

let patron = /dwec/i;

let cadena = 'Hola requetedwec boquepasa dewc I TAL I TALdwEC.'

let posicio = cadena.search(patron);

// cadena = "tonibarcelo@5outlook.es";

patron = /\w/g; //Solo caracteres sin simbolos
patron = /\d/g; //Solo numeros
patron = /\W/g; //Solo símbolos
patron = /\S/g; //Todo sin espacios

patron = /dwec+/gi; //Busca dwec 

cadena = "cada 010 y 100 o cada 1000 veces";
patron = /\d{2}/g //busca numero 2 dígitos
patron = /\d{2,3}/g //busca numeros de 2 y 3 dígitos
let resultado = cadena.match(patron);

console.log(resultado);