document.addEventListener("DOMContentLoaded", function() {
    let span2 = document.getElementById("span2");
    let input = document.getElementById("input");
    let input2 = document.getElementById("input2");
    
    this.addEventListener("mousedown", function() {
        span2.innerHTML = "Acabas de pulsar el ratón";
    });

    input.addEventListener("mousemove", function() {
        span2.innerHTML = "Acabas de mover el ratón ENCIMA del input";
    });
    input.addEventListener("mouseout", function() {
        span2.innerHTML = "Acabas de mover el ratón FUERA del input";
    });
    input2.addEventListener("mouseover", function() {
        span2.innerHTML = "Acabas de mover el ratón ENCIMA del segundo input";
    });
    input2.addEventListener("mouseup", function() {
        span2.innerHTML = "Acabas de liberar el ratón de ENCIMA del segundo input";
    });
});