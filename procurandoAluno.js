const alunos = ["Ana", "Luiza", "Lucas", "Luiz"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] =  listaDeAlunosEMedias

    //    const alunos = listaDeAlunosEMedias[0];
    //    const medias = listaDeAlunosEMedias[1];

        const indice = alunos.indexOf(aluno);

        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaAluno}`)
    } else {
        console.log("Aluno não encontrado(a)!")
    }
}

exibeNomeENota("Ana")