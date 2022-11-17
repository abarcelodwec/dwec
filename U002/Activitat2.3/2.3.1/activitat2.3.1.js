    // Toni Barceló Garcia
    //2.3.1. Sol·licitar un número i presentar la seva taula de multiplicar.
        
    
    // Solicitar número al usuario. Variable Global para acceder desde las funciones.
    let multiplicando = prompt("Inserta número").trim();

        // Validamos el código
        validarmultiplicando();

        // Títlo con el número entrado
        document.getElementById("titulo").innerHTML += multiplicando;

        // Bucle que recorre y multiplica el multiplicando por los números de una tabla (1 al 10)
        for (let i = 1; i<=10; i++){

            producto = multiplicando * i;

            // insertar en cada registro de la tabla tbody cada uno de los multiplicando
            document.getElementById('tbody').innerHTML 
            += "<td>" + multiplicando + "</td>" 
            +  "<td>"+ "X" + "</td>" 
            +  "<td>" + i + "</td>"
            +  "<td>" + "=" + "</td>"
            +  "<td>" + producto + "</td>"
            ;

        }

        //Función que valida que el número insertado no es nulo, que no es NaN o no inserta nada
        function validarmultiplicando(){

            let codigoValido = false;

            //Control: no sale del bucle hasta que es exclusivamente un núemro. 
            while(!codigoValido){

                if(multiplicando == null || (isNaN(multiplicando)) || multiplicando == ''){
                    multiplicando = prompt("No has introducido un número. Vuelve a probar").trim();
                }else{
                    
                    return true;
                }
                
            }
            
        }

