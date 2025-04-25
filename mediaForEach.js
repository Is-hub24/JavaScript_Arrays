// forEach -> Percorre cada elemento do array/lista e executa uma função callback para cada um deles
// forEach =! .map
// forEach -> Não cria uma nova lista/array diferente do .map que cria.

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota, indice) {
    somaDasNotas += nota;
    console.log(indice);

});

const media = somaDasNotas / notas.length;

console.log(`A media das notas é ${media}.`)