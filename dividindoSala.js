// .slice

const alunos = ["Ana Beatriz", "Carlos Eduardo", "Mariana Silva", "João Pedro", "Larissa Rocha",
    "Felipe Souza", "Isabela Martins", "Lucas Gabriel", "Camila Oliveira", "Rafael Lima",
    "Juliana Alves", "Mateus Henrique", "Bruna Costa", "Gustavo Almeida", "Letícia Ferreira",
    "Thiago Moreira", "Amanda Santos", "Diego Ramos", "Nicole Mendes", "Vinícius Barbosa"];

const sala1 = alunos.slice(0, alunos.length / 2); // slice -> Fatiar ou Dividir
//     indice 0 a 9, não pega o ultimo numero
const sala2 = alunos.slice(alunos.length / 2);
0
console.log(sala1);
console.log(sala2);