function gerarSenhaAleatoria(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }
    return senha;
}

criaCartao(
    'Sugestão de senha forte 1',
    'senha 50 Caracteres',
    gerarSenhaAleatoria(50)
)

criaCartao(
    'sugestão de senha forte 2',
    'senha 25 caracteres',
    gerarSenhaAleatoria(25)
)

criaCartao(
    'Programação',
    'Como se abre uma variavel em um projeto javascript',
    'Utilizando as palavras-chave "let", "const" ou "var"'
)

criaCartao(
    'Sugestão de senha forte 3',
    'senha 15 Caracteres',
    gerarSenhaAleatoria(15)
)
