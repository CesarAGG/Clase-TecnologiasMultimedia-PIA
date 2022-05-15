const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

const $btnInicioSesion = document.getElementById('btnIniciarSesion');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        validarInicio.innerHTML = '';
        validarRegistro.innerHTML = '';
        nombre.value = '';
        userName.value = '';
        email.value = '';
        password.value = '';
        emailLogin.value = '';
        passwordLogin.value = '';
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

var firebaseConfig = {
    apiKey: "AIzaSyAlFQ056gA4YRWxVqix_LBQ73vXv2uFMMc",
    authDomain: "pia-tm.firebaseapp.com",
    projectId: "pia-tm",
    storageBucket: "pia-tm.appspot.com",
    messagingSenderId: "198957534463",
    appId: "1:198957534463:web:3e47669630e88a6fac10ca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

let nombre = document.getElementById('sign-up-name');
let userName = document.getElementById('sign-up-userName');
let email = document.getElementById('sign-up-email');
let password = document.getElementById('sign-up-passw');
let validarRegistro = document.getElementById('validar-registro');
let validarInicio = document.getElementById('validar-inicio');
let emailLogin = document.getElementById('sign-in-email');
let passwordLogin = document.getElementById('sign-in-passw');
localStorage.setItem('loged', 'false');

function register() {
    auth.createUserWithEmailAndPassword(email.value, password.value).then(function () {
        userName = document.getElementById('sign-up-userName').value;
        email = document.getElementById('sign-up-email').value;
        user = {userName, email};
        console.log('Usuario registrado');
        validarRegistro.style.color = 'green';
        validarRegistro.innerHTML = 'Usuario registrado';
        localStorage.setItem('user', JSON.stringify(user));
    }).catch(function (error) {
        console.log(error);
        validarRegistro.style.color = 'red';
        validarRegistro.innerHTML = 'Error en correo o contraseña';
        nombre.value = '';
        userName.value = '';
        email.value = '';
        password.value = '';
    })
}

function login() {
    auth.signInWithEmailAndPassword(emailLogin.value, passwordLogin.value).then(function () {
        localStorage.removeItem('loged');
        localStorage.setItem('loged', 'true');
        localStorage.setItem('emailLogin', emailLogin.value);
        window.location.href = '../index.html';
        console.log('Usuario logeado');
    }).catch(function (error) {
        console.log(error);
        validarInicio.style.color = 'red';
        validarInicio.innerHTML = 'Error en correo o contraseña';
        emailLogin.value = '';
        passwordLogin.value = '';
    })
}
