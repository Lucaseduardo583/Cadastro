document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário até que as validações sejam feitas

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmar-senha').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value;

    let formIsValid = true;

    // Validação do nome
    if (!nome || nome.length < 5 || nome.length > 60) {
        alert("O nome deve ter entre 5 e 60 caracteres.");
        formIsValid = false;
    }

    // Validação de E-mail (expressão regular simples)
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        formIsValid = false;
    }

    // Validação de Senha
    if (!senha || senha.length < 6 || senha.length > 60) {
        alert("A senha deve ter entre 6 e 60 caracteres.");
        formIsValid = false;
    }

    // Validação de Confirmação de Senha
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        formIsValid = false;
    }

    // Validação de Cidade
    if (!cidade) {
        alert("A cidade é obrigatória.");
        formIsValid = false;
    }

    // Validação de Estado
    if (!estado) {
        alert("Por favor, selecione um estado.");
        formIsValid = false;
    }

    // Se o formulário for válido
    if (formIsValid) {
        alert("Cadastro realizado com sucesso!");
        // Aqui você pode adicionar lógica para enviar os dados do formulário
    }
});
