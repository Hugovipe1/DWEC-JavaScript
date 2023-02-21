document.addEventListener("DOMContentLoaded",function() {

   
   let href = window.location.href;
   let hostname = window.location.hostname;
   let pathname = window.location.pathname;
   let protocol = window.location.protocol;
   let port = window.location.port;
   let origin = window.location.origin;
   
   window.document.write(`<html><head><title>Hugo Vicente Peligro</title></head><body>
   <ol><li>Ruta completa window.location.href ${href} returna toda la URL.</li>
   <li>Ruta completa window.location.hostname ${hostname} devuelve el nombre de dominio del servidor web</li>
   <li>Ruta completa window.location.pathname ${pathname} devuelve la ruta y el nombre de archivo de la página actual</li>
   <li>Ruta completa window.location.protocol ${protocol} devuelve el protocolo web utilizado (http: o https:)</li>
   <li>Ruta completa window.location.port ${port} returna el puerto</li>
   <li>Ruta completa window.location.origin ${origin} returna el protocolo y el hostname</li>
   </ol>`);
});