const $btnSignIn = document.querySelector('.sign-in-btn'),
        $btnSignUp = document.querySelector('.sign-up-btn'),
        $signUp = document.querySelector('.sign-up'),
        $signIn = document.querySelector('.sign-in');
        
const $btnInicioSesion = document.getElementById('btnIniciarSesion');

document.addEventListener('click', e => {
    if(e.target === $btnSignIn || e.target === $btnSignUp){
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

document.addEventListener('click', e => {
    if(e.target === $btnInicioSesion){
        location.href = '../index.html';
    }
})