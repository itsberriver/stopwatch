let resultado= document.getElementById('resultado')

function sumar() { 
    resultado.textContent=parseInt(resultado.textContent)+1;
}

function restar() {
    resultado.textContent=parseInt(resultado.textContent)-1;
}

function reset() {
    resultado.textContent=0;
}
