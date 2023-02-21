# Tarea 5.3. Formulario completito
## Autor: Hugo Vicente Peligro
Asegúrate de validar lo siguiente:

- Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)

- Tipo de dato introducido (numérico...)

- Dirección de correo válida
    - válidos: hola@adios.com, hola@adios.es.com, hola.pilotes@adios.com, hola.pilotes.pablete@adios.com
    - NO válidos: hola@.com, hola@adios..com, hola.pilotes.@adios.com, hola.pilotes_@adios.com (NO punto ni similar al final  del nombre de cuenta)
- Número de DNI válido
- Fecha válida
- Número de teléfono
    - válido: (+34) 123 456 789,  (+1907) 123 456 789,  (34) 123 456 789, 34 123 456 789, 34.123.456.789,  123.456.789,  123456789
    - NO válido: 12345678
- URL
Asegúrate de que:

1. Al perder el foco de cada control se comprueba su validación.
1. Los errores los muestras mediante css.
1. Al enviar el formulario (evento submit) se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
1. Añade los botones limpiar y rellenar para facilitar las pruebas del formulario
1. Utiliza el destructuring
1. Evita la duplicación de código