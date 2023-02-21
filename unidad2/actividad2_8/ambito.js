/**
 * @author Hugo Vicente Peligro
 */

//global
let x = 7;
console.log(x);

function variableX() {
        let x = 5;
        console.log(x);
        
}
variableX();

{
    let x = 6;
    console.log(x);
}


function variable1() {
    let x = 5;
    function variable2() {
        
        return x++;
    }
    return variable2;
}
variable1();



