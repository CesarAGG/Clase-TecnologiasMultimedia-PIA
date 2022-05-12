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

let user;

function register() {
    let email = document.getElementById('sign-up-email').value;
    let password = document.getElementById('sign-up-passw').value;
    

    auth.createUserWithEmailAndPassword(email, password).then(function() {
        user = document.getElementById('sign-up-name').value;
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }).catch(function (error) {
        console.log(error);
        alert("Error al crear usuario");
    })
}

function login() {
    let email = document.getElementById('sign-in-email').value;
    let password = document.getElementById('sign-in-passw').value;
    

    auth.signInWithEmailAndPassword(email, password).then(function() {
        window.location.href = '../index.html';
        console.log('Usuario logeado');
    }).catch(function (error) {
        console.log(error);
        alert('Error al iniciar sesión');
    })
}