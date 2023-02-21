document.addEventListener("DOMContentLoaded", function(){
    const spanReloj = document.getElementById("spanReloj");
    setInterval(function(){
        let fecha = new Date();
        spanReloj.innerHTML = `${fecha.getHours < 10 ? "0" + fecha.getHours() : fecha.getHours()} : ${fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes()} : ${fecha.getSeconds() < 10 ? "0" + fecha.getSeconds() : fecha.getSeconds()} h`;
    }, 1000);
})