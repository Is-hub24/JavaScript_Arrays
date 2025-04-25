// Map + toUpperCase() -> Serve para mapear e criar uma nova lista com o parametro desejado. 
// Neste exeplo, todos os nomes que estão na lista deverão retornar com letra maiúscula

const nomes = ["Ana Julia", "Caio Vinicius", "Bianca Silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomesPadronizados)