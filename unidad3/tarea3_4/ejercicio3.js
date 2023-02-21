document.addEventListener("DOMContentLoaded", function(){
    let radio = this.getElementById("radio");
    let area = this.getElementById("area");
    radio.addEventListener("input",function() {
        if (radio.value.match(/^[0-9]*$/)) {
            let calculoArea = Math.PI * Math.pow(radio.value,2);
        area.value = calculoArea.toFixed(4);
        
        Number.isNaN(calculoArea) ? area.value= "No es un número" : area.value = calculoArea.toFixed(4);
        }
        else{
            area.value = "El radio tiene que ser decimal";
        }
        
    });
});