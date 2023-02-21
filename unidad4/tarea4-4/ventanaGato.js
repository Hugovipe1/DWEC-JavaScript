/**
 * @author Hugo Vicente Peligro
 */
document.addEventListener("DOMContentLoaded", function() {
    let nombre = document.getElementById("nombre");
    let fecha = document.getElementById("fecha");
    let raza = document.getElementById("raza");
    let peso = document.getElementById("peso")
    let jugar = document.getElementById("jugar");
    let comer = document.getElementById("comer");
    let estado = document.getElementById("estado");
    let img = document.getElementById("image");
    nombre.innerHTML = gato.getNombre;
    fecha.innerHTML = gato.getFechaNac;
    raza.innerHTML = gato.getRaza;
    peso.innerHTML = gato.getPeso;
    jugar.addEventListener("click", function(e) {
        try {
            e.preventDefault();
            gato.juega();
            img.src = "./img/gatojugando.jpeg";
            estado.innerHTML = "El gato esta jugando.";
        } catch (error) {
            jugar.disabled = true;
            comer.disabled = true;
            img.src = "./img/gatomuerto.jpeg";
            estado.innerText = "El gato ha muerto por jugar demasiado.";
        }
        finally{
            peso.innerHTML = window.gato.getPeso; // Se hace siempre se lance o no la excepción
        }
    });
    comer.addEventListener("click", function(e) {
        try {
            e.preventDefault();
            gato.comer();
            img.src = "./img/gatocomiendo.jpeg";
            estado.innerText = "El gato esta comiendo.";
        } catch (error) {
            jugar.disabled = true;
            comer.disabled = true;
            img.src = "./img/gatomuerto.jpeg";
            estado.innerText = "El gato ha muerto por comer mucho.";
        }
        finally{
            peso.innerHTML = window.gato.getPeso;// Se hace siempre se lance o no la excepción
        }

    })
});