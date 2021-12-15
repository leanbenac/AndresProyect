$(document).ready(() =>{
    $('#verMas').hide();

    $('#btn-ver').click(mostrarTexto);
    function mostrarTexto(){
        $('#verMas').show();
    }

    $('#btn-menos').click(ocultarTexto);
    function ocultarTexto(){
        $('#verMas').hide();
    }
});