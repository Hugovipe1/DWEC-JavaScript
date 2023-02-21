document.addEventListener("DOMContentLoaded", function() {
    const numColumn = 5;
    const numFilas = 6;
    const div = document.createElement("div");
    div.style.width = "350px";
    div.style.border = "1px solid black";
    div.style.margin = "0 auto";
    div.style.padding = "10px";
    div.style.borderRadius = "2%";

    const divInputs = document.createElement("div");
    divInputs.style.display = "grid";
    divInputs.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    divInputs.style.gap = "10px";
    divInputs.style.marginTop = "10px";
    divInputs.style.paddingLeft = "5%";
    divInputs.style.paddingBottom = "3%";

    let input;

    for (let index = 0; index < numColumn * numFilas; index++) {
        input = document.createElement("input");
        input.style.maxWidth= "35px";
        input.style.minHeight = "30px";
        input.style.textAlign = "center";
        input.style.border = "1px solid black";
        divInputs.appendChild(input);
    }
    div.appendChild(divInputs);
    document.body.appendChild(div);

    
    
    
});