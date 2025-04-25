// .set ->

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes);

// const nomeAtualizados = [...meuSet];

const nomeAtualizados = [...new Set(nomes)];

console.log(nomeAtualizados);