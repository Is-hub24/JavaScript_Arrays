// Callbacks -> Permite passar uma função como argumento de outra função

const nomes = ["Evaldo", "Ana", "Maria"];

nomes.forEach(function (nome) {
    console.log(nome);
})

// Exemplo de uma callback:

nomes.forEach((nome) => {
    console.log(nome);
});

// Exemplo callback externa

function imprimeNome(nome) {
    console.log(nome)
}
 nomes.forEach(imprimeNome);