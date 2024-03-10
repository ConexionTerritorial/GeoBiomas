 // Función para mostrar el contenido principal y ocultar el logo de carga después de 3 segundos
 function mostrarContenido() {
     setTimeout(function() {
         // Ocultar el logo de carga
         document.getElementById("loader-container").style.display = "none";
         // Mostrar el contenido principal
         document.getElementById("main-content").style.display = "block"

         // Resto del código relacionado con el mapa...
     }, 10000); // 3000 milisegundos = 3 segundos
 }

 // Llamar a la función al cargar la página
 window.onload = function() {
     mostrarContenido();
 };