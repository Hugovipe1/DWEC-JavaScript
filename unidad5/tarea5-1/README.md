# Tarea 5.1. Eventos de ratón
## Autor: Hugo Vicente Peligro

[Ejercicio](main.js)

Responde a las siguientes preguntas:

1. Explica los atributos (y sus valores) que tiene el objeto evento para identificar las coordenadas del evento (x, y)

    Para la coordenada x utiliza la propiedad offSetX que nos dice la coordenada x respecto del borde de ese elemento en nuestro caso el canvas.

    Para la coordenada y utiliza la propiedad offSetY que nos dice la coordenada y respecto del borde de ese elemento en nuestro caso el canvas.

1. Explica los atributos (y sus valores) que tiene el objeto evento para identificar los botones del ratón que intervienen en el evento.

    Para identificar los botones del ratón, se utiliza las propiedades evento.button y evento.buttons.

    evento.buttons nos dice las partes del ratón que se están pulsando mientras ocurren los eventos del tipo ratón. Por ejemplo si haces el evento "mousemove" con el botón izquierdo pulsado evento.buttons valdrá 1, si lo haces con el derecho pulsado valdrá 2 y si lo haces con los dos botones pulsados a la vez vdicho evento valdrá 3. 