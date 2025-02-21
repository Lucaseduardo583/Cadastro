document.getElementById("nome").addEventListener("blur", function() {
    fnAdicionarMensagemDeErro("mensagem-erro-nome", "limpar");

    let nomeValido = fnValidarMinimoDeCaracteres(3, this.value);
    if (nomeValido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "Mínimo 3 caracteres");
    }

    let nomeObrigatorio = fnValidarCampoObrigatorio(this.value);
    if (nomeObrigatorio == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "Campo obrigatório");
    }
});

document.getElementById("email").addEventListener("blur", function() {
    fnAdicionarMensagemDeErro("mensagem-erro-email", "limpar");

    let emailValido = fnValidarMinimoDeCaracteres(3, this.value);
    if (emailValido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-email", "Mínimo 3 caracteres");
    }

    let emailObrigatorio = fnValidarCampoObrigatorio(this.value);
    if (emailObrigatorio == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-email", "Campo obrigatório");
    }

    let emailFormatoValido = fnValidarEmail(this.value);
    if (emailFormatoValido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-email", "E-mail inválido");
    }
});

document.getElementById("senha").addEventListener("blur", function() {
    fnAdicionarMensagemDeErro("mensagem-erro-senha", "limpar");

    let senhaValido = fnValidarMinimoDeCaracteres(6, this.value); 
    if (senhaValido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "Mínimo 6 caracteres");
    }

    let senhaObrigatorio = fnValidarCampoObrigatorio(this.value);
    if (senhaObrigatorio == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "Campo obrigatório");
    }

    let senhaMaiuscula = fnValidarSenhaMaiuscula(this.value);
    if (senhaMaiuscula == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "A senha deve conter pelo menos uma letra maiúscula");
    }

    let senhaCaracterEspecial = fnValidarSenhaCaracterEspecial(this.value);
    if (senhaCaracterEspecial == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "A senha deve conter pelo menos um caractere especial");
    }
});

document.getElementById("confirmar-senha").addEventListener("blur", function() {
    fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "limpar");

    let confirmarSenhaValido = fnValidarMinimoDeCaracteres(6, this.value); 
    if (confirmarSenhaValido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "Mínimo 6 caracteres");
    }

    let confirmarSenhaObrigatorio = fnValidarCampoObrigatorio(this.value);
    if (confirmarSenhaObrigatorio == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "Campo obrigatório");
    }

    let senhasIguais = fnValidarSenhaIgual(document.getElementById("senha").value, this.value);
    if (senhasIguais == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "As senhas não coincidem");
    }
});

document.getElementById("cidade").addEventListener("blur", function() {
    fnAdicionarMensagemDeErro("mensagem-erro-cidade", "limpar");

    let cidadeValido = fnValidarMinimoDeCaracteres(3, this.value);
    if (cidadeValido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "Mínimo 3 caracteres");
    }

    let cidadeObrigatorio = fnValidarCampoObrigatorio(this.value);
    if (cidadeObrigatorio == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "Campo obrigatório");
    }
});

document.getElementById("estado").addEventListener("blur", function() {
    fnAdicionarMensagemDeErro("mensagem-erro-estado", "limpar");

    let estadoValido = fnValidarMinimoDeCaracteres(3, this.value);
    if (estadoValido == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-estado", "Mínimo 3 caracteres");
    }

    let estadoObrigatorio = fnValidarCampoObrigatorio(this.value);
    if (estadoObrigatorio == false) {
        fnAdicionarMensagemDeErro("mensagem-erro-estado", "Campo obrigatório");
    }
});
