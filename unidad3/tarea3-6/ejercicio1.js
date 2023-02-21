/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function(){
    let boton = document.getElementById("boton");
    boton.addEventListener("click", function(){
        let ventana = window.open("","","width=300,height= 200");
        ventana.document.write(`<html><head><title>Hugo Vicente Peligro</title></head><body>Se han utilizado las siguientes propiedades:
        <ul><li>width: ${ventana.outerWidth}</li>
        <li>height: ${ventana.outerHeight}</li></ul></body></html>
        `);
        ventana.document.close();
    });
});