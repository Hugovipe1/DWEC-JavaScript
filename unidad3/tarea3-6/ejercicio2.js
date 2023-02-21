/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded",function(){
    const numVentanas = 5;
    let boton = document.getElementById("boton");
    let arrayVentana = [];
    let ventana;
    let contador = 100;
    let aux = 1;
    boton.addEventListener("click",function(){

        
        for (let index = 0; index < numVentanas; index++) {
            ventana = window.open('','',`top=${contador++},left=${contador++},height=200,width=300`);

            ventana.document.write(`<html><head><title>Hugo Vicente Peligro</title></head><body><p> Ventana ${aux++} </p>
            <p><input type="button" id="botoncierre" value="Cerrar"></p></body></html>`);
            ventana.document.close();
            arrayVentana.push(ventana); 
            
        }
        arrayVentana.forEach(ventana1 => {
            let cierre = ventana1.document.getElementById("botoncierre");
            cierre.addEventListener("click",function() {
                ventana1.close();
                aux--;
            });
        });

    });

    document.getElementById("cerrarMultiples").addEventListener("click",function() {
        arrayVentana.forEach(e => e.close());
        arrayVentana = [];
        aux = 1;
    });

});