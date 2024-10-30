$(document).ready(function() {
    $('.toggleBtn').on('click', function() {
        const detalle = $(this).next('.detalle');
        detalle.toggle(); // Muestra/oculta el contenido
        $(this).text(detalle.is(':visible') ? '-' : '+'); // Cambia el texto del botón
    });
});
