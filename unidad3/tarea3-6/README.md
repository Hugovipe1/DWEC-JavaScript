# Tarea 3.6. Listado Ventanas.


[Ejercicio1](ejercicio1.js)

[Ejercicio2yEjercicio3](ejercicio2.js)
1. Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
Métodos a utilizar:
window.open()
document.write() 
Añade el esqueleto básico: html, head, title, body, ul...

2. Crea la siguiente página Web (lo más dinámica posible) donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
Métodos a utilizar:
miVentana = window.open('','','width=200,height=200');
miVentana.document.open();
miVentana.document.write() 
Añade el esqueleto básico: html, head, title, body, ul...
miVentana.document.close();

3. A la página anterior añade a la ventana principal el botón Cierra. Cerrará TODAS las ventanas abiertas con anterioridad. Confirma que no se produzcan errores.