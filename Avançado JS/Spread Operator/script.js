/*
let primeiros = [1, 2 ,3];

let numeros = [...primeiros, 4,5,10];

console.log(numeros);
*/
/*
let pessoa = {
    nome: "Matheus",
    idade: 45,
    cargo: "RH"
}

let novaPessoa = {
    ...pessoa,
    status: trabalhando,
    corDaCueca: "vermelha"
}
*/

function novoUsuario(info){
    let dados = {
        ...info,
        status: trabalhando, corDaCueca: "vermelha"
    }

    console.log(dados);
}

novoUsuario({nome: "Matheus", idade: 45, cargo: "RH"})