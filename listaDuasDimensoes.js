//

const alunos = ["Ana", "Luiza", "Lucas", "Luiz"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias);
//                                                    [0] ->   posição 0 da primeira lista (listaDeAlunosEMedias) e  
console.log(`A aluna da posição 1 é: ${listaDeAlunosEMedias[0][1]}
    . A media dessa aluna é ${listaDeAlunosEMedias[1][1]}`)
//                                                              [1] -> posição 1 da lista Alunos que esta dentro da lista listaDeAlunosEMedias
// [ [ 'Ana', 'Luiza', 'Lucas', 'Luiz' ], [ 10, 8, 7.5, 9 ] ]
// [                  listaDeAlunosEMEdias                  ]
//   [   alunos                        ], [      medias     ]