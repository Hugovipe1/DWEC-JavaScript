{ //Así hacemos las variables privadas
    document.addEventListener("DOMContentLoaded", function() {
        const numero1 = document.getElementById("numero1");
        const numero2 = document.getElementById("numero2");
        const span = document.getElementById("mensaje");
        document.getElementById("confirma").addEventListener("click", function() {
            if (numero1.value < numero2.value) {
                span.innerHTML = "numero1 no es mayor que numero2";
            }
            if (numero2.value > 0) {
                span.innerHTML = "numero2 es positivo";
            }
            if (numero1.value < 0) {
                span.innerHTML = "numero1 es negativo o distinto de cero";
            }
            if (++numero1.value < numero2.value) {
                span.innerHTML = "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2";
            }
        });

        

    });

    
    
}