document.addEventListener("DOMContentLoaded", function () {
    let ventana = window.open("", "", "width=600,height=600");
    let ol = ventana.document.createElement("ol");
    let textNode;
    const textoOuterHeight = `ventana.outerHeight: ${ventana.outerHeight}px obtiene la altura en pixeles de toda la ventana del navegador. Representa el alto de toda la ventana, incluyendo la barra de notificaciones (si se encuentra) y los bordes.`;
    const textoInnerHeight = `ventana.innerHeight: ${ventana.innerHeight}px la propiedad innerHeight del objeto window nos retornara un valor de tipo entero, que representara (en pixeles) la altura del viewport.`;
    const  textoAvailHeight = `ventana.screen.availHeight: ${ventana.screen.availHeight}px Esta obtiene la cantidad de pixeles que de forma vertical tiene disponibles en viewport que es el espacio visible de tu navegador web (pero que no representa necesariamente el 100% del espacio disponible que la página web tiene para mostrar todos sus elementos).`;
    const textoHeight = `ventana.screen.height: ${ventana.screen.height}px 
    La propiedad de solo Screen.height devuelve la altura de la pantalla en píxeles.`;
    insertLi(textoOuterHeight);
    insertLi(textoInnerHeight);
    insertLi(textoAvailHeight);
    insertLi(textoHeight);
    function insertLi(texto) {
        textNode = document.createTextNode(texto);
        let li = ventana.document.createElement("li");
        li.appendChild(textNode);
        ol.appendChild(li);
        ventana.document.body.appendChild(ol);
    }
});