# Tarea 1.3. Navegadores y herramientas de desarrollo.
1. Qué es un navegador y su relación con el servidor web.

    Es un software con el cuál visualizas la información de una página web. 
    
    El navegador inicia la comunicación con el servidor web que guarda los ficheros de la web a visitar, para una vez recibidos ensamblar y renderizar cada página web en nuestro equipo.

1. Indica cuál es el funcionamiento básico de un navegador.

    La función del navegador es solicitar una página al servidor. El servidor devuelve el contenido en forma de HTML y CSS, el navegador interpreta ese contenido y lo representa para que podamos ver y usar el sitio web.

1. Indica qué es Flash y su relación con los navegadores actuales.

    Adobe Flash es una herramienta de autoría para la creación de contenido multimedia e interactivo. Permite conectar componentes gráficos y programación técnica. Se pueden crear nuevos objetos gráficos o integrar los ya existentes. Al mismo tiempo, pueden ser fácilmente dirigidos y animados por código ActionScript.

    Los desarrolladores tomaron la determinación de retirar el soporte para Flash debido a problemas de seguridad. Por lo que hoy en día ningun navegador utiliza Flash.

1. Indica qué es un applet y su relación con los navegadores actuales.

    Applet es un programa que puede incrustarse en un documento HTML. Uno de los requisitos para el applet funcione es tener instalado Java y que esté activado a través del explorador web.

    Los navegadores ya no soportan los applets de Java, la razón para abandonar el soporte se debió a problemas de seguridad y riesgos que se encontraron.



1. Qué es el motor de renderizado (render engine) en un navegador. Indica los más destacados en la actualidad y asócialos a cada navegador.

    La función principal de un motor de renderizado es transformar los documentos HTML y otros recursos de una página web en una representación visual interactiva en el dispositivo del usuario.

    - WebKit: el motor de renderizado de  Safari y Microsoft Edge hasta 2020.
    - Blink: motor de renderizado de Google Chrome y Microsoft Edge hasta 2020, Opera y Brave.
    - Gecko: motor de renderizado de Mozilla

1. Qué es el intérprete de JavaScript (JavaScript engine) en un navegador. Indica los más destacados en la actualidad y asócialos a su navegador.

    Es un intérprete informático que interpreta el código en lenguaje JavaScript y ejecuta dicho script en relación a dichas instrucciones.

    - SpiderMonkey (Firefox)
    - V8 usado navegadores basados en Chromium (Chrome, Microsoft Edge, Opera) y en Node.js y Deno.
    - JavaScriptCore usado en navegadores basados en Webkit (Safari).
    - Carakan (versiones antiguas de Opera).
    - Chakra intérprete de JScript (Internet Explorer).

1. El mismo código JavaScript va a se ejecutado en distintos navegadores. Explica las particularidades de la programación de guiones y sus ventajas y desventajas sobre la programación tradicional.

1. Microsoft ha realizado un cambio de rumbo en su navegador Edge. Comenta el estado actual y los cambios.


    Microsoft Edge basado en EdgeHTML abandono su motor de renderizado tras 4 años de estancamiento, ahora se ha basado en Chromiun
1. Chrome Dev Tools, Chrome Canary y Timeline. Averigua qué son.

    - Chrome DevTools es un conjunto de herramientas para desarrolladores web integrado en el navegador Google Chrome. Con estas herramientas puede inspeccionar el HTML renderizado (DOM).

    - Canary es el canal de betas en el que se prueban por primera vez las nuevas funcionalidades. Estas funciones se añaden en cuanto están terminadas y antes de ser probadas por nadie en Google.
    
    - Timeline
    
        js es una de las herramientas  pensada para crear líneas del tiempo que puedes incluir en otras páginas web. Está preparada para obtener los datos desde una hoja de cálculo de Google o archivos JSON.


1. Stackblitz. Averigua qué es y crea un primer proyecto en él. Indica qué ventajas tiene.

    Es un IDE en la nube basado en Visual Studio Code.

    Creación de un proyecto:

    Primero elegimos JavaScript
    ![IDE](image/Captura%20de%20Pantalla%202022-09-26%20a%20las%2017.12.44.png)

    Y tenemos un proyecto con nuestro archivo js, HTML y CSS. Dandole al botón de la nube descargamos el proyecto en local. También podemos iniciar sesión con GitHub.
    
    ![IDE](image/Captura%20de%20Pantalla%202022-09-26%20a%20las%2017.15.05.png)



    Ventajas: 
        
    - Se pueden añadir librerías externas de manera casi inmediata.
    - Se pueden cargar directamente aplicaciones creadas con Angular CLI o create-react-app desde un repositorio de GitHub.
    - Puedes trabajar con Angular o React.
    - Código fuente compartible.
    - EL editor es fácil de usar.

