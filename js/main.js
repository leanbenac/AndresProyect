$(document).ready(() => {
    $('#verMas').hide();

    $('#btn-ver').click(mostrarOcultarTexto);
    let mostrar = true;
    function mostrarOcultarTexto() {
        if (mostrar == true) {
            $('#btn-ver').text('Ver Menos');
            $('#verMas').show();
            mostrar = false;
        }
        else {
            $('#verMas').hide();
            $('#btn-ver').text('Ver Más');
            mostrar = true;
        }

    }
});