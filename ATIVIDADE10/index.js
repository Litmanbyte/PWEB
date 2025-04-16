function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
                
    const imc = peso /Math.pow(altura , 2);
    
    const classificacao = classificarIMC(imc);
    
    const resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML = `
        <h3>Resultado</h3>
        <p><strong>Seu IMC:</strong> ${imc.toFixed(2)}</p>
        <p><strong>Classificação:</strong> ${classificacao.descricao}</p>
        <p><strong>Grau de Obesidade:</strong> ${classificacao.grau}</p>
    `;
    resultadoDiv.style.display = 'block';
    resultadoDiv.style.backgroundColor = classificacao.cor;
}

function classificarIMC(imc) {
    let descricao, grau, cor;
    
    if (imc < 18.5) {
        descricao = "Magreza";
        grau = "0";
        cor = "#ffeb3b";
    } else if (imc >= 18.5 && imc <= 24.9) {
        descricao = "Normal";
        grau = "0";
        cor = "#4caf50";
    } else if (imc >= 25.0 && imc <= 29.9) {
        descricao = "Sobrepeso";
        grau = "I";
        cor = "#ff9800";
    } else if (imc >= 30.0 && imc <= 39.9) {
        descricao = "Obesidade";
        grau = "II";
        cor = "#f44336";
    } else {
        descricao = "Obesidade Grave";
        grau = "III";
        cor = "#d32f2f";
    }
    
    return { descricao, grau, cor };
}