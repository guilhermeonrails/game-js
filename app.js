iniciarJogo()
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, textoParaExibir) {
    let campo = document.querySelector(tag);
    campo.innerHTML = textoParaExibir;
    responsiveVoice.speak(textoParaExibir, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function iniciarJogo() {
    exibirTextoNaTela("h1", "Jogo do número secreto") 
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10")
}

function verificarChute() {
    let chute = document.querySelector("input").value

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
        let mensagem = `O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa} 😎`
        exibirTextoNaTela("p", mensagem)
    } else if (chute > numeroSecreto) {
        mensagem =  `O número secreto é menor que ${chute}`
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
    numeroSecreto = gerarNumeroAleatorio
    tentativas = 1
}

function limparInput() {
    let campoInput = document.querySelector("input")
    campoInput.value = ""
}

function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10) + 1
}