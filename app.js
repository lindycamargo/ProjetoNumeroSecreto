let listaDeNumerosSorteados = [];
let numeroDeJogadas = parseInt(prompt(`Informe o número de jogadas`));
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
function verificarChute(){
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Você Acertou!')
        let = mensagemTentativas = `Você acertou o Número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('img').src = "./img/trofeuu.png";
        
    }
    else{
        let palavraMaior = chute > numeroSecreto ? 'menor' : 'maior';
        let mensagemMaior = `O número secreto é ${palavraMaior} que ${chute}`
        exibirTextoNaTela('p', mensagemMaior);

        // if (chute > numeroSecreto){
        //     exibirTextoNaTela('p', 'O número secreto é menor')
        // }
        // else{
        //     exibirTextoNaTela('p', 'O número secreto é maior')
        // }

        tentativas++;
        limparCampo();
    }
}

function gerarNumeroSecreto() {
   let numeroEscolhido =  parseInt(Math.random() * numeroDeJogadas + 1);

   if(listaDeNumerosSorteados.length == numeroDeJogadas){
    listaDeNumerosSorteados = [];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroSecreto();
   }
   else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function reiniciarJogo(){
   numeroSecreto = gerarNumeroSecreto();
   tentativas = 1;
   limparCampo();
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
   document.querySelector('img').src = "./img/ia.png";
}