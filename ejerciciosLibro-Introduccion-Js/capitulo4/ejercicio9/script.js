{
    document.addEventListener("DOMContentLoaded", function () {
        const cadena = document.getElementById("cadena");
        const span = document.getElementById("mensaje");
        document.getElementById("confirma").addEventListener("click", function () {
            if (cadena.value == cadena.value.toUpperCase()) {
                span.innerHTML = cadena.value + " está formada solo por mayúsculas";
            }

            else if (cadena.value == cadena.value.toLowerCase()) {
                span.innerHTML = cadena.value + " está formada solo por minúsculas";
            }
            else {
                span.innerHTML = cadena.value + " está formada por mayúsculas y minúsculas";
            }

        });
    });
}