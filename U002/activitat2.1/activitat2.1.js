    // UD02 - Maneig de la sintaxi del lleguatge
    // Activitat 2.1

    // Toni Barceló Garcia

/*
    // 1. Crea un programa en el que creis 5 variables numèriques (enter, decimal, científic, octal i hexadecimal).


        //Declarar Variables

        let nEnter = 726;
        let nDecimal = 3.75;
        let nCientific = 3e7;
        let nOctal = 0327;
        let nHexagesimal = 0xA3F2;

        // Mostrar per HTML contingut variables

        document.getElementById('enter').innerHTML = 'Enter: ' + nEnter;
        document.getElementById('decimal').innerHTML = 'Decimal: ' + nDecimal;
        document.getElementById('cientific').innerHTML = 'Científic: ' + nCientific;
        document.getElementById('octal').innerHTML = 'Octal: ' + nOctal;
        document.getElementById('hexagesimal').innerHTML = 'Hexagesimal: ' + nHexagesimal;
*/


/*
    // 2. Crea un programa que crei 4 variables de tipus cadena amb els següents valors, “Hola”, “7”, “13” i “Adeu”.

        // Declaració de variables

        let hola = "Hola", set = "7", tretze = "13", adeu = "adeu";

        console.log("\'Hola caracola\'");

        console.log(hola + '\n' + adeu);

        console.log(' 7 + 13 = ' + (parseInt(set) + Number(tretze))); //parseInt() i Number()

        console.log(hola + set + tretze + adeu);
*/



    // 3. Crea un programa que demani a l'usuari que introdueixi una edat i mostri el següent missatge (alert o console.log) en funció del número introduït.

    // 0-12:  Nen
    // 13-26:  Jove
    // 26-60: Adult
    // >60: Jubilat
    
/*
        let resposta = prompt("Indica la teva edat per saber la teva classificació");
        
        let classificació = "El valor " + resposta + " no és un nombre vàlid."; //fora de rang
        
        // Si no entra dins del bucle i modifica la resposta, està fora de rang

        if (resposta >= 0 && resposta <= 12){

            classificació = 'Nen';
            
            }else if(resposta >= 13 && resposta <= 26){
                
                classificació = 'Jove';
                
            }else if(resposta >= 27 && resposta <= 60){
                
                classificació = 'Adult';
                
            }else if(resposta > 60 && resposta <= 120){
                
                classificació = 'Jubilat';

            }
            
        alert('La teva classificació és: ' + classificació);
*/
 
/*
    // 4. Crea un programa que generi un llista d’hores que vagin des de les 9 fins les 21:30 de 30 min en 30 min.

        // Iniciam l'hora a les 9:00
        let hora = new Date();
        hora.setHours(9);
        hora.setMinutes(00);

        // Bucle de 30 en 30 minuts fins les 21:30 h. (en punt i i mitja des de les 9:00 fins les 21:30)
        for (let i = 0; hora.getHours() <= 21 && hora.getMinutes != 30; i++){
            document.write(hora.getHours() + ':' + (hora.getMinutes()==0?'0':'') + hora.getMinutes() + '<br>'); //afegida la condició per imprimir '00' quan és en punt.
            hora.setMinutes(hora.getMinutes() + 30);
        }
*/

/*
    // 5. Crea un control parental per a que no es pugui entrar a una pàgina.
    
        // Iniciam variables
        
        let resposta = "";    
        let paraulaClau = 'nadal';

        // Bucle per mostrar la pregunta fins que s'introdueix la paraula clau
        
        while (resposta != paraulaClau){

            resposta = prompt("Cognom del tenista Mallorquí més famós");

            resposta = resposta.toLowerCase(); //Evitar case sensitive

        }
*/

