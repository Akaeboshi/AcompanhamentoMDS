
let pessoa = {
    nome: "Lucas",
    sobrenome: "Heler",
    empresa: "Junior",
    cargo: "Estudante"
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

/*
let nome = "TESTE";

const{ nome:nomePessoa, cargo, empresa, sobrenome} = pessoa;

console.log(nomePessoa);
console.log(cargo);

console.log(empresa);
console.log(sobrenome);

*/
let nomes = ["Matheus", "Lucas", "Henrique"];

/*
let {0:Matheus, 2:Henrique } = nomes

console.log(Matheus);
console.log(Henrique);
*/

let[primeiroNome, segundoNome] = nomes;

console.log(primeiroNome);
console.log(segundoNome);