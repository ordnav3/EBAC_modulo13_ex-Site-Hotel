$(document).ready(function () {
    $('#telefone').mask('(00) 0000-00000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor insira seu Nome',
            email: 'Por favor insira seu Email',
            mensagem: 'Por favor insira sua Mensagem',
        }
    })

})