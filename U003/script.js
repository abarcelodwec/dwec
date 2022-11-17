// setTimeOut() y setInterval()


/*

    -setTimeout(funcion a llamar, milisegundos):
        Ejecutará la función transcurrido el tiempo en milisegundos.
    
    -setInterval(funcion a llamar, milisegundos):
        Ejecutará la función periodicamente en milisegundos.

    - clearInterval(funcion setInterval):
        Para setInterval()

    - clearTimeout():
        Para ejecución iniciada con setTimeout().

*/
let elCrono;

crono();

function crono(){

                
            //Extrae las horas del objeto
            //getHours()
            
            //Extrae los minutos del objeto
            //getMinutes()
            
            //Extrae los segundos del objeto
            //getSecons()

            let miHora = new Date();
            let horas = miHora.getHours();
            let minutos = miHora.getMinutes();
            let segundos = miHora.getSeconds();
            let ampm ='';


            if(horas>12){
                horas = horas-12
                ampm = ' pm'
            }else{

                ampm = ' am'
            }

            if(horas<10){horas = '0' + horas;}

            
            if(minutos<10){minutos = '0' + minutos;}
            if(segundos<10){segundos = '0' + segundos;}


            
            let texto = document.getElementById("hora");
            

            texto.innerHTML = horas + ':' + 
                                minutos + ':' +
                                segundos + 
                                ampm;

}


window.onload = function(){
    elCrono = setInterval(crono, 1000)
}