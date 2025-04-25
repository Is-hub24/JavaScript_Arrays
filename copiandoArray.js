const notas = [7, 7, 8, 9];

const novasNotas = [...notas];
// [...notas] -> spread operator (...) usado para fazer uma cópia do array notas.
// Notas tem os mesmos elementos que notas, mas é um array separado.

novasNotas.push(10);
// Adiciona o numero 10 no final do array novasNotas, agora o array está assim [7, 7, 8, 9, 10]
notas.push(5);
// Adiciona o numero 5 no final da array notas, agora o array notas está assim [7, 7, 8, 9, 5] 
// Não afetará o array novasNotas pois é uma cópia da primeira versão

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);