/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function(){
    
    generar();
    

    function generar(){
        let arrayAleatorios = new Array();
        contador = 0;
        while(contador < 10){
            arrayAleatorios.push(Math.round(Math.random()*11));
            contador++;
        }
        crearLista(arrayAleatorios, "10 enteros aleatorios");


       let arrayPares = arrayAleatorios.filter(e => e % 2 == 0);
       crearLista(arrayPares,"Pares extraidos del anterior");

        
       let media = arrayPares.reduce((e1, e2) => e1 +e2) / arrayPares.length;
       let arrayMedia = Array.of(media);
        crearLista(arrayMedia, "Media del anterior");

    }

    function crearLista(array, mensaje){
        let ulLista = document.createElement("ul");
        let texto = document.createTextNode(mensaje);
        ulLista.appendChild(texto);
        array.forEach(e => {
            let liLista = document.createElement("li");
            liLista.appendChild(document.createTextNode(e));
            ulLista.appendChild(liLista);
        });
        document.body.appendChild(ulLista);
    }
})