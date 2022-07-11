/*
let lista = ["Matheus", "Jose", "Maria"];

lista.map((item,index) => {
    console.log(`Passando: ${item} - Esta em ${index + 1}`)
})
*/

let numeros = [5,3,2,7,9,8];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
console.log(`${acumulador} - total até o momento`)
console.log(`${numero} - valor atual`)
console.log(`${indice} - indice atual`)
console.log(`${original} - array original`)
console.log(" ");

return acumulador += numero;
})

console.log("Total " + total);