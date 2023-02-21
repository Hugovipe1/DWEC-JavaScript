/**
 * Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún 
 * puede escribir. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas
 * horizontales cuando se haya llegado al máximo número de caracteres.
 * 
 * @author Hugo Vicente Peligro
 */

{
    document.addEventListener("DOMContentLoaded", function () {
        const NUM_CARACTERES = 50;
        let mensaje = document.getElementById("mensaje");
        let textArea = document.getElementById("textArea");

        let mayorQuemaximoCaracteres = function(numero, numeroMaximo){
            if (numeroMaximo > numero) {
                return false;
            }
            return true;
        }
        textArea.addEventListener("paste", function(evento){ 
            if (mayorQuemaximoCaracteres(evento.clipboardData.getData("text/plain").length + textArea.value.length, NUM_CARACTERES)) {
              evento.preventDefault();
            }
            })
        textArea.addEventListener("keypress",function(evento) {
            if(this.value.length >= NUM_CARACTERES){
                mensaje.innerHTML = "No puedes escribir mas de 50 caracteres";
                evento.preventDefault();
            }
            mensaje.innerHTML = "Puedes escribir hasta "+(NUM_CARACTERES-this.value.length)+" caracteres";
        } );
        
    });
}
