/*
function convidados(...nome){
    console.log(nomes);
}

convidados("Matheus", "Jorge");
*/

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log("Você roletou: " + numeros[numeroGerado]);
}

sorteador(1,4,5,12,3,16,6,62)