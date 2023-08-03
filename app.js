iniciarJogo()
let listaDeNumerosJaSorteados = []
let numeroLimiteParaSorteio = 3
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1


function exibirTextoNaTela(tag, textoParaExibir) {
    let campo = document.querySelector(tag);
    campo.innerHTML = textoParaExibir;
    responsiveVoice.speak(textoParaExibir, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function iniciarJogo() {
    exibirTextoNaTela("h1", `Adivinhe o <span class="container__texto-azul">número secreto</span>`)
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10")
}

function verificarChute() {
    let chute = document.querySelector("input").value

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagem = `O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa} 😎`
        exibirTextoNaTela("p", mensagem)
    } else if (chute > numeroSecreto) {
        mensagem = `O número secreto é menor que ${chute}`
        exibirTextoNaTela("p", mensagem)
        limparInput()
    } else {
        mensagem = `O número secreto é MAIOR que ${chute}`
        exibirTextoNaTela("p", mensagem)
        limparInput()
    }
    tentativas++
}

function reinicarJogo() {
    iniciarJogo()
    numeroSecreto = gerarNumeroAleatorio()
    tentativas = 1
    limparInput()
}

function limparInput() {
    let campoInput = document.querySelector("input")
    campoInput.value = ""
}

// function gerarNumeroAleatorio() {
//     return parseInt(Math.random() * 10) + 1
// }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteParaSorteio) + 1
    let quantidadeNumerosJaSorteados = listaDeNumerosJaSorteados.length

    console.log(quantidadeNumerosJaSorteados, listaDeNumerosJaSorteados)

    if (quantidadeNumerosJaSorteados == numeroLimiteParaSorteio) {
        listaDeNumerosJaSorteados = []
        return gerarNumeroAleatorio()
    }
    if (listaDeNumerosJaSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosJaSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}