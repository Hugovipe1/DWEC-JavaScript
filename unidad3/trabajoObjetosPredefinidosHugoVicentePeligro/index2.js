document.addEventListener("DOMContentLoaded", function(){
    let querySelectorH1 = this.querySelector("h1");
    let querySelectorDiv = this.querySelector("div");
    let querySelector = this.querySelector("li");
    console.log("Primer elemento del DOM obtenido");
    console.log(querySelector);

    let querySelectorAll = this.querySelectorAll(".lista");
    querySelectorAll.forEach(element => {
        console.log("Elemento con la clase lista")
        console.log(element);
    });

    //document.body.removeChild(querySelectorH1); //Si descomentamos de elimina esa etiqueta.
    //document.body.replaceChild(querySelectorDiv,querySelectorH1); //Si descomentamos remplaza el elemento h1 por el elemento div

});