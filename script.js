function encontrarMenorNumero(lista) {
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return menor;
}

// Testando o algoritmo
const numeros = [10, 5, 8, 3, 7, 9];
const menorNumero = encontrarMenorNumero(numeros);
console.log("O menor número é:", menorNumero);
