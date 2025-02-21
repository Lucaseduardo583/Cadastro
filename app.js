document.getElementById("nome").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-nome", "limpar")

    let nomeValido = fnValidarMinimoDeCaracteres(3, this.value);
    if(nomeValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "mínimo 3 caracteres")
    }

    let nomeObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(nomeObrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "campo obrigatório")
    }
})

document.getElementById("email").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-email", "limpar")

    let emailValido = fnValidarMinimoDeCaracteres(3, this.value);
    if(emailValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "mínimo 3 caracteres")
    }

    let emailObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(emailObrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "campo obrigatório")
    }
})

document.getElementById("senha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-senha", "limpar")

    let senhaValido = fnValidarMinimoDeCaracteres(3, this.value);
    if(senhaValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "mínimo 3 caracteres")
    }

    let senhaObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(senhaObrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-senha", "campo obrigatório")
    }
})

document.getElementById("confirmar-senha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "limpar")

    let confirmarSenhavalido = fnValidarMinimoDeCaracteres(3, this.value);
    if(confirmarSenhavalido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "mínimo 3 caracteres")
    }

    let confirmarSenhaObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(confirmarSenhaObrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "campo obrigatório")
    }
})

document.getElementById("cidade").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-cidade", "limpar")

    let cidadeValido = fnValidarMinimoDeCaracteres(3, this.value);
    if(cidadeValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "mínimo 3 caracteres")
    }

    let cidadeObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(cidadeObrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-cidade", "campo obrigatório")
    }
})

document.getElementById("estado").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-estado", "limpar")

    let estadoValido = fnValidarMinimoDeCaracteres(3, this.value);
    if(estadoValido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-estado", "mínimo 3 caracteres")
    }

    let estadoObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(estadoObrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-estado", "campo obrigatório")
    }
})