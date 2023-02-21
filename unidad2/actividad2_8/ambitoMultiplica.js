/**
 * @author Hugo Vicente Peligro
 */


 bb = 5;
function variable() {
    let a= 2;
    console.log(a*bb);
}
variable();




function multiplica() {
    let c = 10;
    function multiplica2() {
        let d = 15;
        console.log(bb * c);
        console.log(bb * d);
        console.log(c * d);

    };
    multiplica2();
}
multiplica();








