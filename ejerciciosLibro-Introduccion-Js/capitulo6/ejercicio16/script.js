{
    document.addEventListener("DOMContentLoaded", function(){
        const mensaje = document.getElementById("info");
        document.addEventListener("click",function (event) {
            event.preventDefault;
            mensaje.innerHTML = calcularPantallafunction(event);
            


        });

        let calcularPantallafunction =function(event) {
            
            let ancho = screen.width;
                let alto = screen.height;
                let resultadoAncho;
                let resultadoAlto;
    
                if(event.pageX <= ancho/2){
                    resultadoAncho = "izquierda";
                }
                else{
                    resultadoAncho = "derecha";
                }
                if(event.pageY <= alto/2){
                    resultadoAlto = "arriba";
                }
                else{
                    resultadoAlto = "abajo";
                }
                return resultadoAncho + " " + resultadoAlto;
        }

    });
}