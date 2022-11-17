let bcreaCookies = document.getElementById('creaCookies'); 
let bmuestraCookies = document.getElementById('mostrarCookies'); 
let beliminaCookies = document.getElementById('eliminarCookies'); 
let display = document.getElementById('display');


function creaCookies(){
    let usuarioCookie = "manolo"
    document.cookie ="usuario=" + encodeURIComponent(usuarioCookie);
    document.cookie ="color=azul;expires=Sat, 29 Oct 2022 12:00:00 GMT";
}

function mostrarCookies(){

    // let cookies = document.cookie;
    // cookies = cookies.replaceAll('usuario=', '').replaceAll('color=', '');
    // let arrCookie = cookies.split(';');
    // display.innerHTML = arrCookie;

    let cookieUsuario = document.cookie.match('color');

    display.innerHTML = cookieUsuario;

    




}
function eliminarCookies(){

    document.cookie = 'usuario=; max-age=0';

}



bcreaCookies.addEventListener('click', creaCookies, false);
bmuestraCookies.addEventListener('click', mostrarCookies, false);
beliminaCookies.addEventListener('click', eliminarCookies, false);