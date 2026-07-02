function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        
        // Se o cartão for de senha e estiver sendo aberto, gera uma senha nova em tempo real!
        if (respostaEstaVisivel && categoria.toLowerCase().includes('senha') && typeof gerarSenhaAleatoria === 'function') {
            // Descobre o tamanho da senha lendo o texto da pergunta (ex: "senha 50 Caracteres" -> 50)
            const numerosNaPergunta = pergunta.match(/\d+/);
            const tamanho = numerosNaPergunta ? parseInt(numerosNaPergunta[0]) : 15;
            
            // Atualiza o parágrafo da resposta com uma senha novinha
            const paragrafoResposta = cartao.querySelector('.cartao__conteudo__resposta p');
            if (paragrafoResposta) {
                paragrafoResposta.textContent = gerarSenhaAleatoria(tamanho);
            }
        }

        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao)
}
