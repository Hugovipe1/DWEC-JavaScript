/**
 * @author Hugo Vicente Peligro
 */
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("enlace").addEventListener("click", function(e) {
        e.preventDefault();
        window.history.back();
    })
    
    let input = this.getElementById("nombreApellido");
    let spanNombre = this.getElementById("spanNombre");
    let spanApellidos = this.getElementById("spanApellidos");
    let muestraError = this.getElementById("muestraError");
    let setNombreApellidos = new Set();
    input.addEventListener("blur", function() {
        let resultado = input.value.match(/^((?:[a-záéíóú]+)[ ]*(?:[a-záéíóú]*))[,][ ]?((?:[a-záéíóú]+)[ ]*(?:[a-záéíóú]*))$/i);
        resultado ? muestraApellidosNombre(resultado) : muestraError.innerHTML = "Error. Formato correcto: Cuadrado Perfecto, Anacleto";    
    });

    function muestraApellidosNombre(resultado) {
        spanApellidos.innerHTML = resultado[1];
        spanNombre.innerHTML = resultado[2];
            muestraError.innerHTML = "";
            comprobarRepetir(resultado);
    }

    function comprobarRepetir(resultado) {
        setNombreApellidos.has(resultado[1] + resultado[2]) ? muestraError.innerHTML = "REPETIDO" : setNombreApellidos.add(resultado[1] + resultado[2]);

    }
});