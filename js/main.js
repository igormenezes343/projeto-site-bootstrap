$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',);

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            mensagem:{
                required:true
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome',
            email:'Por favor, insira seu E-mail',
            mensagem:'Por favor, insira uma mensagem'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(enveto, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})