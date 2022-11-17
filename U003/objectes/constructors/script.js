function coche(marca, modelo, color, kms, combustible){

    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;


}

let miCoche = new coche("Ferrari", "Testarrosa", 'Rojo', 10, "gasolina");
let tuCoche = new coche("Ford", "Focus", 'Gris', 160000, "gasolina");

let otroCoche = miCoche;

miCoche.color = 'verde'

console.log(miCoche);
console.log(tuCoche);