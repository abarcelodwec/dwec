let coche = {
    marca: "Ford",
    modelo: "Ka",
    color: "Rojo",
    puertas: 3,
    kms: 270000,
    automatico: false,
    propietario: {nombre: "Joan", apellido: "Melsión"}
};

let coche2 = new Object();
coche2.marca = "Ferrari";
coche2.modelo = "LaFerrari";
coche2.color = "Rojo";
coche2.puertas = "2";
coche2.kms = 5;
coche2.automatico = "manual";

// for(campo in coche){
//     console.log(campo + ": " + coche[campo]);
// }

// console.log(coche.propietario.nombre);
// console.log(coche["propietario"]["apellido"]);

let unCliente ={

    nombre: 'Jander Clander',
    'direccion del cliente': 'Ca nostra, 6A',
    '+-*+-*+-*': 'wtf',
    pagos: {

        tipo: 'Visa',
        'numero de la tarjeta' : 123456789,
        'fecha de caducidad' : 'never'


    }
}

console.log(unCliente.nombre)

//muestraCamposYValores(unCliente);

// Objto con funciones
    // let estudiante = {

    //     id: 2,
    //     nombre: 'Toni',
    //     diHola: () => 'Hola'
    // };

    // console.log(estudiante.nombre);
    // console.log(estudiante.diHola());

    // estudiante.edad = 25;

    // estudiante.diAdios = () => 'Adeu!';
    // console.log(estudiante.edad);
    // console.log(estudiante.diAdios());




let factura = {
    descripcion: 'Factura de ejemplo',
    precio: 100.00,
    iva: 21.00,
    subtotal: () => this.precio,
    total: function(){

        return this.precio + ((this.precio * this.iva) /100)

    } 
        


}

console.log(factura);
console.log(factura.total());
// funciones auxiliares

function muestraCamposYValores(miObjeto){

    for(campo in miObjeto){
        if(typeof(miObjeto[campo]) == 'object'){//Compara si devuelve la cadena 'object' del typeof por si es un objeto que contiene otros valores.

            muestraCamposYValores(miObjeto[campo]);

        }else{


            console.log(campo + ': ' + miObjeto[campo]);

        }


    }


}
