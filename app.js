//abaixo, no código comentado, estamos referenciando o "h1" do documento html para exibir texto na tela sem o uso de função;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo Secreto TOP';


//abaixo, no código comentado, estamosreferenciando o "p" do documento html para exibir texto na tela sem o uso de função;
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//criando função em java script para mostrar o número gerado pela função numeroSecreto
function verificarChute() {
        let valorDoInput = document.querySelector('input').value;    
    if (valorDoInput == pcNumero) {
        exibirTextoNaTela('h1', `Parabéns, você acertou com ${tentativas} tentativa(s)`);
        exibirTextoNaTela('p', 'Atualize a página e jogue novamente');
        document.querySelector('button#reiniciar').removeAttribute('disabled') //está linha seleciona o botao pelo id e remove atributo que o está desabilitando-o
    } else {
        if (valorDoInput > pcNumero) {
            exibirTextoNaTela('h1', `Errou, o número Secreto é  menor que ${valorDoInput}`);
            
        } else {
            exibirTextoNaTela('h1', `Errou, o número secreto é maior que ${valorDoInput}`);
        }
        tentativas++
        limparCampo()
    }
}

//criando função para receber tag e texto (parâmetros) a serem exibidos na tela do navegador
function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto    
}

function limparCampo() {
    let valorDoInput = document.querySelector('input')
    valorDoInput.value = ""
    valorDoInput.focus()
}

function msgsIniciais() {
    exibirTextoNaTela("h1", "Adivinhe o número") //ivocando outra função que exibe os textos inciais
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10")
}

function reiniciarJogo() {
    msgsIniciais()
    limparCampo()
    pcNumero = numeroAleatorio()
    console.log(`agora o número secreto é: ${pcNumero}`)
    document.getElementById('reiniciar').setAttribute('disabled', true)
    tentativas = 1
}

//Utilizo o método de lista chamado "includes" pare verificar se o número está incluído ou não nã minha lista de numeros escolhidos
//Caso o número esteja na lista, chamo novamente a função com return.
//Caso o número não esteja na lista, utilizo o metodo push para incluí-lo
// linha 64 limpa lista

function numeroAleatorio() {
    let numeroGerado =  parseInt(Math.random() * 10 + 1)
    
    if(numerosEscolhidos.length == 5) {
        numerosEscolhidos = []
    }
    if (numerosEscolhidos.includes(numeroGerado)) {         
        return numeroAleatorio() 
    } else {
        numerosEscolhidos.push(numeroGerado)
        console.log(numerosEscolhidos)
        return numeroGerado
    }
}

msgsIniciais()
let numerosEscolhidos = []
let tentativas = 1;
let pcNumero = numeroAleatorio();
console.log(pcNumero);
