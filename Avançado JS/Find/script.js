/*
let listagem = [5, 4, "Matheus", "Jose", "Maria"];

let busca = listagem.find((item)=>{
    if(item === "Jose"){
        return console.log("Retornou certinho")
    }

})

console.log(busca);
*/

let palavras = ["Matheus", "Ana", "Ricardo Silva", "Momento 4"];

let resultado = palavras.filter((item)=>{
    return item.length <= 5;
})

console.log(resultado);