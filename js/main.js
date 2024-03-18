$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();


        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                cpf: {
                    required: true
                },
                endereco: {
                    required: true
                },
                cep: {
                    required: false,
                }
            },
            messages: {
                nome: 'Por favor, insira o seu nome',
                email: 'Por favor, insira seu e-mail',
                telefone: 'Por favor, insira seu telefone',
                cpf: 'Por favor, insira seu cpf',
                endereco: 'Por favor, insira seu endereço',
                cep: 'Por favor, insira seu cep',
            },
            submitHandler: function (form) {
                console.log(form);
                if ($('input').hasClass('valid')) {
                    window.location.href = "/registersuccessful.html"
                }
            
                else {
                    alert('Erro no login')
                }
            },

            invalidHandler: function (evento, validador) {
                let camposIncorretos = validador.numberOfInvalids()
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos.`)
                }
            }

            
        })

        


    });
    $('#nome').on('keyup', function (e) {

        const nomeContato = $(this).val();
        const nomeValido = limitarNome(nomeContato);

        if (nomeValido) {
            $(this).css('border', '1px solid red');
        }
        else {
            $(this).css('border', '1px solid green');
        }
    })


    $('#email').on('input', function () {
        const email = $(this).val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const resultado = emailRegex.test(email);

        if (resultado) {
            $(this).css('border', '1px solid green');
        } else {
            $(this).css('border', '1px solid red');
        }
    });

    $('#telefone').on('keyup', function () {
        $('#telefone').mask('(00) 00000-0000')

        const telefone = limitarTel($(this).val());

        if (telefone) {
            $(this).css('border', '1px solid green');
        }
        else {
            $(this).css('border', '1px solid red');
        }

    })

    $('#cpf').on('keyup', function () {
        $('#cpf').mask('000.000.000-00')

        const cpf = limitarCpf($(this).val());

        if (cpf) {
            $(this).css('border', '1px solid green');
        }
        else {
            $(this).css('border', '1px solid red');
        }

    })

    $('#endereco').on('keyup', function () {

        const enderecoVal = $(this).val()
        const endereco = enderecoCompleto(enderecoVal);

        if (endereco) {
            $(this).css('border', '1px solid red');
        }
        else {
            $(this).css('border', '1px solid green');
        }

    })

    $('#cep').on('keyup', function () {
        $('#cep').mask('00000-000')

        const cep = limitarCep($(this).val());

        if (cep) {
            $(this).css('border', '1px solid green');
        }
        else {
            $(this).css('border', '1px solid red');
        }

    })







    function limitarNome(nomeCompleto) {
        const nomeTodo = nomeCompleto.split(' ');
        if (nomeTodo.length >= 2) {
            return nomeTodo.value
        }
        else {
            return nomeTodo.length;
        }
    }

    function limitarTel(numeroTel) {
        if (numeroTel.length == 15) {
            return numeroTel.length
        }

        else {
            return numeroTel.value;
        }
    }
    function limitarCpf(numeroCpf) {
        if (numeroCpf.length == 14) {
            return numeroCpf.length
        }

        else {
            return numeroCpf.value
        }
    }
    function limitarCep(numeroCep) {
        if (numeroCep.length == 9) {
            return numeroCep.length
        }

        else {
            return numeroCep.value
        }
    }

    function enderecoCompleto(endereco) {
        const enderecoCompleto = endereco.split(' ');
        if (enderecoCompleto.length >= 3) {
            return enderecoCompleto.value;
        }
        else {
            return enderecoCompleto.length;
        }
    }


   
})

