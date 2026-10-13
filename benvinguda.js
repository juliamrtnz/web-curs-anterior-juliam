function mostrarBienvenida() {
    
    if (!localStorage.getItem('alertaMostrada')) { //Comprovació de que no ha sortit ja abans l¡alerta
        
        alert("¡Benvinguts a la gran festa del Futbol Femení!"); // Missatge
        
        localStorage.setItem('alertaMostrada', 'true'); //La guardem perquè no torni a sortir.
    }
} //NOMES SURT QUAN ENTRES PER PRIMERA VEGADA, A L'ENTRAR UNA ALTRA VEGADA NO SURT, JA QUE S'HA GUARDAT A L'HISTORIAL EL FET QUE JA T'HA SORTIT.