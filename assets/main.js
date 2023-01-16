var numero = 0;

var elementoNumeroAtual = document.getElementById('numeroAtual');

function subtrair() {
    numero--;
    elementoNumeroAtual.innerHTML = numero;
    if (numero < 0){
        elementoNumeroAtual.style.color = '#cf34b2';
    }
}

function adicionar() {
    numero++;
    elementoNumeroAtual.innerHTML = numero;
    if (numero >= 0){
        elementoNumeroAtual.style.color = '#70dd4e';
    }
}