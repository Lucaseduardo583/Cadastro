function fnValidarMinimoDeCaracteres(minimo_de_caracteres, valor_do_campo) {
    return valor_do_campo.length >= minimo_de_caracteres;
}

function fnValidarCampoObrigatorio(valor_do_campo) {
    return valor_do_campo.trim().length > 0;
}

function fnAdicionarMensagemDeErro(id_mensagem, mensagem) {
    const elemento = document.getElementById(id_mensagem);
    if (!elemento) return;

    if (mensagem === "limpar") {
        elemento.style.display = "none";
        elemento.innerHTML = "";
    } else {
        elemento.style.display = "block";
        elemento.innerHTML += elemento.innerHTML ? "<br>" + mensagem : mensagem;
    }
}

function fnValidarSenhaIgual(confirmar_senha, senha) {
    return confirmar_senha === senha;
}

function fnValidarSenhaMaiuscula(senha) {
    return /[A-Z]/.test(senha);
}

function fnValidarSenhaCaracterEspecial(senha) {
    return /[^a-zA-Z0-9]/.test(senha);
}

function fnValidarEmail(email) {
    return /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/.test(email);
}

module.exports = {
    fnValidarMinimoDeCaracteres,
    fnValidarCampoObrigatorio,
    fnValidarSenhaIgual,
    fnValidarSenhaMaiuscula,
    fnValidarSenhaCaracterEspecial,
    fnValidarEmail
};
