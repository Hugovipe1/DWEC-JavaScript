/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function () {
    let capitalizaInput = document.getElementById("capitalizaInput");
    let capitalizaSpan = document.getElementById("capitalizaSpan");
    capitalizaInput.addEventListener("input", function () {
        let regexp = capitalizaInput.value.match(/\b[a-z]/g);
        capitalizaSpan.innerHTML = capitalizaInput.value.replace(regexp, (letra) => letra.toUpperCase());
    });

    let invierteInput = document.getElementById("invierteInput");
    let invierteSpan = document.getElementById("invierteSpan");
    invierteInput.addEventListener("input", function () {
        invierteSpan.innerHTML = invierteInput.value.replace(/[A-z]/g, letra => {
            return (letra === letra.toLowerCase()) ?
                 letra.toUpperCase(): 
                 letra.toLowerCase();
        });
    });


    let camelCaseInput = document.getElementById("camelCaseInput");
    let camelCaseSpan = document.getElementById("camelCaseSpan");
    camelCaseInput.addEventListener("input", function () {
        camelCaseSpan.innerHTML = camelCaseInput.value.replace(/\b\s[\w]/g, letra => { return letra.toUpperCase().trimLeft() });
    });

    let sinCamelCaseInput = document.getElementById("sinCamelCaseInput");
    let sinCamelCaseSpan = document.getElementById("sinCamelCaseSpan");
    sinCamelCaseInput.addEventListener("input", function () {
        sinCamelCaseSpan.innerHTML = sinCamelCaseInput.value.replace(/[\w]/g, letra => {
            if (letra == letra.toUpperCase()) {
                return " "+letra.toLowerCase();
            }
            return letra;
        });
    });

    let finalizaInput = document.getElementById("finalizaInput");
    let finalizaCompara = document.getElementById("finalizaCompara");
    let finalizaSpan = document.getElementById("finalizaSpan");
    finalizaCompara.addEventListener("blur", function() {
        finalizaSpan.innerHTML = finalizaInput.value.endsWith(finalizaCompara.value) ? "Si" : "No";
    });



    let empiezaInput = document.getElementById("empiezaInput");
    let empiezaCompara = document.getElementById("empiezaCompara");
    let empiezaSpan = document.getElementById("empiezaSpan");
    empiezaCompara.addEventListener("blur", function() {
        empiezaSpan.innerHTML = empiezaInput.value.startsWith(empiezaCompara.value) ? "Si" : "No";
    })

    let dniInput = document.getElementById("dniInput");
    let dniSpan = document.getElementById("dniSpan");

    dniInput.addEventListener("blur", function() {
        // Otra manera con nombre a los grupos {groups:{numero:numero1 ; letra:letra1}} = "12345678Z".match(/(?<numero>\d{8})(?<letra>[A-z])/);
        let regexp = dniInput.value.match(/^(\d{8})([A-z])$/);
        console.log(regexp);
        if (regexp) {
            let letras = "TRWAGMYFPDXBNJZSQVHLCKET";
            let letra = letras.charAt(regexp[1] % 23);
            dniSpan.innerHTML = (letra == regexp[2].toUpperCase()) ? "DNI correcto" : "letra incorrecta";
        }
        else {
            dniSpan.innerHTML = "Formato incorrecto";
        }
        
    });

    let matriculaTextArea = document.getElementById("matriculaTextArea");
    let matriculasSpan = document.getElementById("matriculasSpan");
    matriculaTextArea.addEventListener("blur", function(){
        const regexp = /((\d{4})[\s-]?([BCDGFHJKLMNPRSTVWXYZ]{3}))/g;
        let array = [...matriculaTextArea.value.matchAll(regexp)];
        if (array) {
            for (const key of array) {
                matriculasSpan.innerHTML += key[0]+ " ";
            }
            
        }
        else{
            matriculasSpan.value = "mátricula inválida";
        }
    });

    let codigoTextArea = this.getElementById("codigoTextArea");
    let codigoSpan = this.getElementById("codigoSpan");
    codigoTextArea.addEventListener("blur", function(){
        const regexp = /(50|51|52|[1-4][0-9]|0[1-9])([0-9])([0-9])([1-9])/g;
        let array = [...codigoTextArea.value.matchAll(regexp)];
        
        if(array.length > 0){
            for (const key of array) {
                codigoSpan.innerHTML += key[0]+" ";
            }
        }
        else{
            codigoSpan.innerHTML = "inválido";
        }
    });

    let macInput = document.getElementById("macInput");
    let macSpan = document.getElementById("macSpan");
    macInput.addEventListener("blur", function(){
        //  /^[0-9A-fa-f]{2}([\s:])([0-9A-fa-f]{2}(\1)){4}[0-9A-fa-f]{2}$/
        let regexp = this.value.match(/^[0-9A-Fa-f]{2}([:-])[0-9A-Fa-f]{2}([:-])[0-9A-Fa-f]{2}([:-])[0-9A-Fa-f]{2}([:-])[0-9A-Fa-f]{2}([:-])[0-9A-Fa-f]{2}$/);
        console.log(regexp);
        if (regexp) {
            if ((regexp[1] == regexp[2]) && (regexp[2] == regexp[3]) && (regexp[3] == regexp[4]) && (regexp[4] == regexp[5])) {
                macSpan.innerHTML = "Si";
            }
            else{
                macSpan.innerHTML = "No";
            }
            
        }
        else{
            macSpan.innerHTML = "No";
        }
        
    });





    let ipInput = document.getElementById("ipInput");
    let ipSpan = document.getElementById("ipSpan");
    ipInput.addEventListener("blur",function(){
        // (\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})/
        let regexp = this.value.match(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/);
        if (regexp) {
            ipSpan.innerHTML = "Si";
        }
        else{
            ipSpan.innerHTML = "No";
        }
        
    });
});