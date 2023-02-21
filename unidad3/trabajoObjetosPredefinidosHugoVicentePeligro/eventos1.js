document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByName("blur")[0].addEventListener("blur", function (e) {
        console.log("Se ha perdido el foco");
    });
    document.getElementsByName("focus")[0].addEventListener("focus", function (e) {
        console.log("Se ha obtenido el foco");
    });
    document.getElementsByName("dblclick")[0].addEventListener("dblclick", function (e) {
        console.log("Se ha hecho doble click");
    });
    document.getElementsByName("keydown")[0].addEventListener("keydown", function (e) {
        console.log("Se ha pulsado la tecla: " + e.key);
    });
    document.getElementsByName("keyup")[0].addEventListener("keyup", function (e) {
        console.log("Se ha soltado la tecla: " + e.key);
    });

    console.log(document.getElementsByTagName("div")[0].style.cssText) 
    console.log(document.getElementsByTagName("div")[0].style) 

});
