{
    document.addEventListener("DOMContentLoaded", function (){
        document.querySelectorAll("a").forEach(enlace => {
            enlace.addEventListener("click", function(event){
                event.preventDefault;

                const parrafo = this.previousElementSibling;
                parrafo.classList.toggle("oculto");

                this.innerHTML = parrafo.classList.contains("oculto") ? "Mostrar contenidos" : "Ocultar contenidos";

            });
        });

   });
}