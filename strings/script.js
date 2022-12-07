let text = "Boquepasa Requete 123";

//text.length
console.log(text.length);

//lastIndexOf
console.log(text.lastIndexOf("que"));

//search =>RETORNA-1 si no apareix la cadena
console.log(text.search("1"));

//slice
console.log(text.slice(2,6));
console.log(text.slice(text.lastIndexOf("que"), text.search("2")));

//substring
console.log(text.substring(3,4));
console.log(text.substr(5,2));

//replace
console.log(text.replace("que", "pepe"));
console.log(text.replaceAll("que", "pepe"));

//toUpperCase
console.log(text.toUpperCase());
//toLowerCase
console.log(text.toLowerCase());

//concat
console.log(text.concat("456"," y sigue"," y sigue"));
prova= [" uno",",dos",",tres."];
console.log(text.concat(...prova));

//charAt
console.log(text.charAt(2));

//split lo que divide pasa a ser un array
console.log(text.split("e"));
//especificamos cuantos elementos tiene el arraylos demas del numero desaparecen
console.log(text.split("e", 2));

//repeat
console.log(text.repeat(3));