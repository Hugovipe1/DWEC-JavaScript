document.addEventListener("DOMContentLoaded", function () {
    console.log("Se ha cargado completamente el DOM");
    

    document.addEventListener("click", function () {
        console.log("Se ha hecho click en el documento");

        let helloElement = document.createElement("h2");
        let text = document.createTextNode(Math.floor(Math.random() * 100));
        helloElement.appendChild(text);
        document.body.append(helloElement);
    });
    
    let titulo = document.getElementById("titulo")
    console.log("El contenido del titulo es: " + titulo.innerHTML);


    let h1 = document.getElementById("titulo");
    h1.addEventListener("click", function () {
        document.open();
        document.write("<h1>Se ha cambiado el contenido del documento</h1>");
        document.close();
    });
});
