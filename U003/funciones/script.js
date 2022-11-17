

// function suma(a, b){
    
    //     return a + b;
    // }
    
    
    let suma = new Function('a', 'b', 'return a + b');
    
    
    let c = suma(4, 6);    
    // console.log(c);

function factorial(numero){

    if(numero == 0){

        return 1


    }else{

        return (numero * factorial(numero -1));


    }


}

console.log(factorial(5));


function fibonacci(a, b){
    
    // let c = 0;

    while(c < 150){

        c = a + b;
        
        console.log (c);
        
        fibonacci(b, c)
        
    }



}

fibonacci(0,1);
