document.addEventListener("DOMContentLoaded", function(){
    let info = document.getElementById("info");
    document.addEventListener("mousemove", function(event){
        coordenadaXPagina = event.pageX;
        coordenadaYPagina = event.pageY;
        coordenadaXVentana = event.clientX;
        coordenadaYVentana = event.clientY;
        muestraInformacion(['Ratón', 'Navegador['+ coordenadaXPagina+','+ coordenadaYPagina+'],Pantalla['+ coordenadaXVentana+','+coordenadaYVentana +']'])
    });

    document.addEventListener("keypress", function(event){
        let caracter = event.charCode;
        let letra = String.fromCharCode(caracter);
        let codigo = letra.charCodeAt(0);
        info.style.background = '#CCE6FF';
        muestraInformacion(['Teclado', 'Carácter ['+letra+']', 'Código ['+codigo+']']);
    });

    document.addEventListener("click", function(event){
        info.style.background = '#FFFFCC';
    });

    function muestraInformacion(mensaje) {
        info.innerHTML = '<h1>'+mensaje[0]+'</h1>';
        for(var i=1; i<mensaje.length; i++) {
          info.innerHTML += '<p>'+mensaje[i]+'</p>';
        }
      }

});