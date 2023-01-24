// 1º Passo - Função para manipular o envio do formulário, capturando o evento de submit.
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const peso = e.target.querySelector('#peso');
    const altura = form.querySelector('#altura');

    const dataImc = {
        peso: Number(peso.value),
        altura: Number(altura.value)
    }
    console.log(dataImc);

    if(!dataImc.peso){
        setResult('Peso inválido', false);
        return
    }
    if(!dataImc.altura){
        setResult('Altura inválida', false);
        return
    }
    
    const imc = imcGet(dataImc.peso, dataImc.altura);
    const imcTable = tableImc(imc);
  
    const msg = `O Seu IMC é ${imc} (${imcTable}})`;
    setResult(msg, true);
});
// 2º Passo - Pegar os valores do input e incluir na div resultado, do seu formulário.
function setResult(msg, isValid){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const paragraph = createParagraph();
    if (isValid) {
        paragraph.classList.add('paragrafo-resultado')
    } else {
        paragraph.classList.add('bad')
    }
    paragraph.innerHTML = msg; 
    resultado.appendChild(paragraph);       
}
// 3º Passo - FUNÇÃO QUE CALCULA O IMC PESO / (ALTURA * ALTURA)
function imcGet(peso, altura){
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}
// FUNÇÃO PARA CRIAR PARÁGRAFOS.
function createParagraph(){
    const paragraph = document.createElement('p');  // Cria um elemento HTML
    return paragraph;
}
function tableImc(imc){
    const listResult = [
       'Abaixo do peso', 'Peso normal', 'Sobrepeso',
       'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'
    ];
    if (imc < 18.5) return listResult[0];
    if ((imc >= 18.5) && (imc <= 24.9)) return listResult[1];
    if ((imc >= 25) && (imc <= 29.9)) return listResult[2];
    if ((imc >= 30) && (imc <= 34.9)) return listResult[3];
    if ((imc >= 35) && (imc <= 39.9)) return listResult[4];
    if (imc >= 40) return listResult[5];
}
