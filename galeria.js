const fotos = document.querySelectorAll(".graella-fotos img");

const modal = document.getElementById("modalGaleria");
const imatgeGran = document.getElementById("imatgeGran");
const tancar = document.getElementById("tancarModal");

modal.style.opacity = "0"; //Per a trasició suau
modal.style.transition = "opacity 0.4s ease";

fotos.forEach(function(foto){

    foto.addEventListener("click", function(){

        modal.style.display = "flex";
        imatgeGran.src = foto.src;

        setTimeout(function(){ //Per a trasició suau
            modal.style.opacity = "1";
        }, 10);

    });

});

tancar.addEventListener("click", function(){

    modal.style.opacity = "0";

    setTimeout(function(){
        modal.style.display = "none";
    }, 400);

});

modal.addEventListener("click", function(event){

    if(event.target === modal){

        modal.style.opacity = "0";

        setTimeout(function(){
            modal.style.display = "none";
        }, 400);

    }

});