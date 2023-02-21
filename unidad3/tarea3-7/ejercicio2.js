document.addEventListener("DOMContentLoaded", function(){
    this.getElementById("bajarLinea").addEventListener("click", function(){
        window.scrollByLines(1);
    });

    this.getElementById("subirLinea").addEventListener("click", function(){
        window.scrollByLines(-1);
    });

    this.getElementById("bajarPagina").addEventListener("click", function(){
        window.scrollByPages(1);
    });

    this.getElementById("subirPagina").addEventListener("click", function(){
        window.scrollByPages(-1);
    });
    this.getElementById("inicio").addEventListener("click", function(){
        window.scrollTo(0,0);
    });

    this.getElementById("fin").addEventListener("click", function(){
        window.scrollTo(0,document.body.scrollHeight);
    });
});