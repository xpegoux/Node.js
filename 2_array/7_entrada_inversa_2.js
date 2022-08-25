/*
Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor.
Ao final, exiba o array e o array ao contrário (generalização do script anterior).
*/
const print = require('readline-sync');
let array = [];
let ask;
const inverso = num => num.sort((a, b) => b - a);

ask = Number(print.question("Deseja que o array possua quantos elementos? "));
for (let i = 0; i < ask; i++) {    
    array[i] = Number(print.question(`Posicao ${i}: `));
}
console.log(`Array preenchido\n${array}`);
console.log(`\nArray inverso\n${inverso(array)}`);