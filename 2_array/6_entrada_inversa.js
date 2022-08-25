/*
Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1
*/
const print = require('readline-sync');
let array = [];

const inverso = num => num.sort((a, b) => b - a);

for (let i = 0; i <= 2; i++) {    
    array[i] = Number(print.question(`Posicao ${i}: `));
}
console.log(inverso(array));