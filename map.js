// map -> Serve para mapear e gerar uma nova lisa respeitando os parametros dados na arrow function

const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);