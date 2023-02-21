/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function() {

    console.log("---------------Ejercicio1-slice---------------");
    let a=[1, 2, {3:3, 5:5}]
    let c1 = a.slice();
    let c2 = JSON.parse( JSON.stringify(a));
    console.log(c1,c2);
    a[2][5]= 55;
    console.log(c1,c2);

    console.log("---------------Ejercicio2-Destructuring---------------");
    cadena = "Zenda Menchú";
    let [nombre,apellido] = cadena.split(" ");
    console.log(nombre,apellido);


    console.log("---------------Ejercicio3-sort---------------");
    let array= ['dolar', 'dólar', 'Amigo', 'ánimo', 'Ágora', 'Decisicón'];
    array.sort((a, b) => a.localeCompare(b));
    console.log(array);


    console.log("---------------Ejercicio4-sort---------------");
    let alumnas = [{ nombre: 'Anacleta', apellido: 'Cándida' },    { nombre: 'Manola', apellido: 'CÁNTICO' },    { nombre: 'Simona', apellido: 'Carola' }];
    alumnas.sort((a, b) => a["apellido"].localeCompare(b["apellido"]));
    console.log(alumnas);
});

