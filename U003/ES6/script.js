const nombres = [];

nombres.push('Toni');

console.log(typeof(nombres));

const ultimoNombre = nombres.pop();

console.log(ultimoNombre);
console.log(nombres);


// DESESTRUCTURACION

const personaje = ['Sam', 'Gimli', 'Frodo', 'Légolas', 'Pippin'];

const [leal, heroe, , , pillo] = personaje;

// console.log(personaje);
// console.log(leal);
// console.log(pillo);

const masPersonaje = {

    nombre: 'Gandalf',
    apodo: 'El gris',
    edad: 1024,
    armas: ['Glamdring', 'Magia']
};


// const{nombre, apodo, armas} = masPersonaje;

// console.log(nombre);
// console.log(armas);
// const [espada, poder] = armas;

// console.log(espada);

const nombrePersonaje = 'Legolas';

const razaPersonaje = 'Elfo';

const armasPersonaje = [{tipo:'Arco', cantidad:1}, {tipo:'Flecha', cantidad:10}];

const requetepersonaje = {

    nombre: nombrePersonaje,
    raza : razaPersonaje,
    armas: armasPersonaje,
    edat: 666
};

// console.log(requetepersonaje);

const requetepersonaje2 = {
    
    nombrePersonaje,
    razaPersonaje,
    armasPersonaje,
    edat: 666
};

console.log(requetepersonaje2);