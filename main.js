$(function () {
    // make the class hover-galeria fade in when hovered over
    $('.hover-galeria').hover(function () {
        $(this).fadeTo('fast', 1);
    }, function () {
        $(this).fadeTo('fast', 0);
    }
    );
})


isLogedTrue();

function isLogedTrue() {
    if(localStorage.getItem('loged') === 'true') {
        user = getUser();
        document.getElementById('inicioSesion').style.display = 'none';
        document.getElementById('salir').style.display = 'inline-block';
        document.getElementById('user').innerHTML = user;
        document.getElementById('user').style.display = 'inline-block';
    } 
}

function salir() {
    localStorage.removeItem('loged');
    localStorage.removeItem('emailLogin');
    localStorage.setItem('loged', 'false');
    document.getElementById('inicioSesion').style.display = 'inline-block';
    document.getElementById('salir').style.display = 'none';
    document.getElementById('user').innerHTML = '';
}

function getUser() {
    if(localStorage.getItem('emailLogin') === JSON.parse(localStorage.getItem('user')).email) {
        return JSON.parse(localStorage.getItem('user')).userName;
    }
}