$(document).ready(() => {
    $('#verMas').hide();
    $('#parrafosNota1Oculto').hide();
    $('#parrafosNota2Oculto').hide();

    $('#btn-ver').click(mostrarOcultarTextoInicio);
    $('#btnNota1').click(mostrarOcultarTextoNota1);
    $('#btnNota2').click(mostrarOcultarTextoNota2);

    let mostrar = true;
    function mostrarOcultarTextoInicio() {
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

    function mostrarOcultarTextoNota1() {
        if (mostrar == true) {
            $('#btnNota1').text('Ocultar');
            $('#parrafosNota1Oculto').show();
            mostrar = false;
        }
        else {
            $('#parrafosNota1Oculto').hide();
            $('#btnNota1').text('Continuar leyendo');
            mostrar = true;
        }
    }

    function mostrarOcultarTextoNota2() {
        if (mostrar == true) {
            $('#btnNota2').text('Ocultar');
            $('#parrafosNota2Oculto').show();
            mostrar = false;
        }
        else {
            $('#parrafosNota2Oculto').hide();
            $('#btnNota2').text('Continuar leyendo');
            mostrar = true;
        }
    }

});