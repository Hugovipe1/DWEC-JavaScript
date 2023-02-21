{

    document.addEventListener("DOMContentLoaded", function(){
        
        
        document.getElementById("enlace").addEventListener("click",function(event){
            event.preventDefault();
            document.getElementById("adicional").className = "visible";
            document.getElementsByTagName("a")[0].className = "oculto";
        });
        
    });
}