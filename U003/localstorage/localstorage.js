let bcreaLocalStorage = document.getElementById('creaLocalStorage'); 
let bmuestraLocalStorage = document.getElementById('mostrarLocalStorage'); 
let beliminaLocalStorage = document.getElementById('eliminarLocalStorage'); 
let display = document.getElementById('display');


function creaLocalStorage(){
    localStorage.setItem('usuario', 'Tponi');
    localStorage.setItem('color', 'Verde');
}

function mostrarLocalStorage(){

    let LocalStorageUsuario = localStorage.getItem('color');

    for (let i = 0; i < localStorage.length; i++) {
        const element = localStorage.getItem(localStorage.key(i));
        
        display.innerHTML += element;
    }


}

function eliminarLocalStorage(){

    localStorage.removeItem('color');

}



bcreaLocalStorage.addEventListener('click', creaLocalStorage, false);
bmuestraLocalStorage.addEventListener('click', mostrarLocalStorage, false);
beliminaLocalStorage.addEventListener('click', eliminarLocalStorage, false);