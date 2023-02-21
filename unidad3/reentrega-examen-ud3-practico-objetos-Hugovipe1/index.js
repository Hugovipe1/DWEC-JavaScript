/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enlace").addEventListener("click", function(){
        let ventana =  window.open("","","width=600,height=600");
        ventana.document.open();
        ventana.document.write(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="author" content="Hugo Vicente Peligro">
            <script src="numeritos.js"></script>
            <title>Hugo Vicente Peligro</title>
        </head>
        <body>
        <h1>Hugo Vicente Peligro. Examen Diciembre 2022.</h1>
        <h2>Numeritos a tutiplén desde cero</h2>
        <div>
        <a href="" id="enlace">Atrás</a>    
        </div>
        </body>
        </html>
        `);
        ventana.document.close();
    });
});