const formulari = document.querySelector(".formulariContacte");

const correu = document.getElementById("correu");
const errorCorreu = document.getElementById("errorCorreu");

const contrasenya = document.getElementById("contrasenya");
const confirmarContrasenya = document.getElementById("confirmar-contrasenya");
const errorContrasenya = document.getElementById("errorContrasenya");

formulari.addEventListener("submit", function(event) {

    let formulariValid = true;

    // VALIDACIÓ DEL CORREU
    let patroCorreu = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!patroCorreu.test(correu.value)) {

        formulariValid = false;

        correu.style.border = "2px solid red";
        errorCorreu.style.display = "block";

    } else {

        correu.style.border = "1px solid #775e7a";
        errorCorreu.style.display = "none";
    }

    // VALIDACIÓ DE LES CONTRASENYES
    if (contrasenya.value !== confirmarContrasenya.value) {

        formulariValid = false;

        confirmarContrasenya.style.border = "2px solid red";
        errorContrasenya.style.display = "block";

    } else {

        confirmarContrasenya.style.border = "1px solid #775e7a";
        errorContrasenya.style.display = "none";
    }

    if (!formulariValid) {
        event.preventDefault();
    }

});

// AMAGA ERROR DEL CORREU QUAN ES TORNA A ESCRIURE
correu.addEventListener("input", function() {

    errorCorreu.style.display = "none";
    correu.style.border = "1px solid #775e7a";

});

// AMAGA ERROR DE CONTRASENYA QUAN ES TORNA A ESCRIURE
confirmarContrasenya.addEventListener("input", function() {

    errorContrasenya.style.display = "none";
    confirmarContrasenya.style.border = "1px solid #775e7a";

});