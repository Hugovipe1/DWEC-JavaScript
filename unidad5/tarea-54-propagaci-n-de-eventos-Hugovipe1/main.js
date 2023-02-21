/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function() {
    let elementos = document.getElementsByClassName("click");
    let span1 = document.getElementById("span1");
    for (const elemento of elementos) {
        elemento.addEventListener("click", function(){
            console.log("Bubling: "+ elemento.tagName);
        });
        elemento.addEventListener("click", function(){
            span1.innerHTML += " " + elemento.tagName; 
        },true);
    }

    document.getElementById("once").addEventListener("blur", function(event){
        document.getElementById("span2").innerHTML = event.target.value;
    },{once: true});

    document.getElementById("divPadre").addEventListener("click", function(event){
        console.log(`event.target.tagName: ${event.target.tagName}; this: ${this.tagName}`);
    });

    let input = document.getElementById("remove");
    let handleInput = function(event) {
        console.log(event.target.value);
    }
    input.addEventListener("input", handleInput);

    let submit = document.getElementById("submit");
    submit.addEventListener("click", function(event){
        event.preventDefault();
        input.removeEventListener("input", handleInput);
    }); 
});