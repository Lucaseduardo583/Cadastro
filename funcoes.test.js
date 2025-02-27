const minhasFuncoes = require('./funcoes')

test('O mínimo é 5 e passei 3, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(5, 'bob')).toBe(false);
})

test('O mínimo é 3 e passei 5, tem que retornar false', () => {
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(3, 'gutox')).toBe(true);
})

test('Campo obrigatório com valor vazio deve retornar false', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio('')).toBe(false);
})

test('Campo obrigatório com espaço deve retornar false', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio('   ')).toBe(false);
});

test('Campo obrigatório com valor válido deve retornar true', () => {
    expect(minhasFuncoes.fnValidarCampoObrigatorio('teste')).toBe(true);
});

test('Senhas iguais devem retornar true', () => {
    expect(minhasFuncoes.fnValidarSenhaIgual('senha123', 'senha123')).toBe(true);
});

test('Senhas diferentes devem retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaIgual('senha123', 'senha456')).toBe(false);
});

test('Senha "Senha123" deve conter maiúscula e retornar true', () => {
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('Senha123')).toBe(true);
});

test('Senha "senha123" não contém maiúscula e deve retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('senha123')).toBe(false);
});

test('Senha "Senha@123" deve conter caractere especial e retornar true', () => {
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('Senha@123')).toBe(true);
});

test('Senha "Senha123" não contém caractere especial e deve retornar false', () => {
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('Senha123')).toBe(false);
});

test('E-mails válidos devem retornar true', () => {
    expect(minhasFuncoes.fnValidarEmail('teste@email.com')).toBe(true);
    expect(minhasFuncoes.fnValidarEmail('user.name@domain.com')).toBe(true);
});

test('E-mails inválidos devem retornar false', () => {
    expect(minhasFuncoes.fnValidarEmail('testemail.com')).toBe(false);
    expect(minhasFuncoes.fnValidarEmail('user@com')).toBe(false);
});