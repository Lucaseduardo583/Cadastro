// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário até que as validações sejam feitas

    // Obtendo os valores dos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmar-senha').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value;

    let formIsValid = true;

    // Validação de Nome
    if (!nome) {
        mostrarErro('nome', 'O nome é obrigatório.');
        formIsValid = false;
    } else {
        removerErro('nome');
    }

    // Validação de E-mail (uso de regex simples)
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !regexEmail.test(email)) {
        mostrarErro('email', 'Por favor, insira um e-mail válido.');
        formIsValid = false;
    } else {
        removerErro('email');
    }

    // Validação de Senha
    if (!senha || senha.length < 6) {
        mostrarErro('senha', 'A senha deve ter pelo menos 6 caracteres.');
        formIsValid = false;
    } else {
        removerErro('senha');
    }

    // Validação de Confirmação de Senha
    if (senha !== confirmarSenha) {
        mostrarErro('confirmar-senha', 'As senhas não coincidem.');
        formIsValid = false;
    } else {
        removerErro('confirmar-senha');
    }

    // Validação de Cidade
    if (!cidade) {
        mostrarErro('cidade', 'A cidade é obrigatória.');
        formIsValid = false;
    } else {
        removerErro('cidade');
    }

    // Validação de Estado
    if (!estado) {
        mostrarErro('estado', 'Selecione o estado.');
        formIsValid = false;
    } else {
        removerErro('estado');
    }

    // Se o formulário for válido, enviamos os dados
    if (formIsValid) {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode adicionar uma lógica para enviar os dados do formulário
        // como uma requisição AJAX ou outras ações de processamento
    }
}

// Função para mostrar mensagens de erro
function mostrarErro(campo, mensagem) {
    const input = document.getElementById(campo);
    const error = document.createElement('div');
    error.classList.add('error-message');
    error.textContent = mensagem;

    // Verifica se a mensagem de erro já existe para o campo
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
        input.insertAdjacentElement('afterend', error);
    }
}

// Função para remover mensagens de erro
function removerErro(campo) {
    const input = document.getElementById(campo);
    const error = input.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
        error.remove();
    }
}

// Adiciona um ouvinte de evento para o envio do formulário
document.querySelector('form').addEventListener('submit', validarFormulario);
