document.addEventListener("DOMContentLoaded", function() {
    let binario = document.getElementById("binario");
    let octal = document.getElementById("octal");
    let decimal = document.getElementById("decimal");
    let hexadecimal = document.getElementById("hexadecimal");
    binario.addEventListener("input", function(){
        if (binario.value.match(/^[01]*$/)) {
            octal.value = parseInt(binario.value,2).toString(8);
            decimal.value = parseInt(binario.value,2);
            hexadecimal.value = parseInt(binario.value,2).toString(16);
        }
        else{
            octal.value = decimal.value =  hexadecimal.value ="No es un número binario";
        }
        
    });
    octal.addEventListener("input", function(){
        if (octal.value.match(/^[0-7]*$/)) {
            binario.value = parseInt(octal.value,8).toString(2);
            decimal.value = parseInt(octal.value,8);
            hexadecimal.value = parseInt(octal.value,8).toString(16);
        }
        else{
            binario.value = decimal.value =  hexadecimal.value ="No es un número octal";
        }
        
    });
    decimal.addEventListener("input", function(){
        if (decimal.value.match(/^[0-9]*$/)) {
            binario.value = parseInt(decimal.value).toString(2);
            octal.value = parseInt(decimal.value).toString(8);
            hexadecimal.value = parseInt(decimal.value).toString(16);
        }
        else{
            binario.value = octal.value =  hexadecimal.value ="No es un número decimal";
        }
        
    });
    hexadecimal.addEventListener("input", function(){
        if (hexadecimal.value.match(/^[0-9abcdef]*$/i)) {
            binario.value = parseInt(hexadecimal.value,16).toString(2);
            octal.value = parseInt(hexadecimal.value,16).toString(8);
            decimal.value = parseInt(hexadecimal.value,16);
        }
        else{
            binario.value = octal.value =  decimal.value ="No es un número decimal";
            
        }
        
        
    });
});