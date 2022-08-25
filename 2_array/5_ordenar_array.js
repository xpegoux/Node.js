/*
Crie uma função arrow que recebe um array de 20 números e coloque eles em ordem crescente.
*/
const ordenar = numeros => numeros.sort((a, b) => a - b);
let array = [99, 98, 55, 41, 23, 2, 3, 7, 89, 37, 21, 22, 54, 91, 0, 10, 100, 107, 65, 66];
console.log(ordenar(array));

//Dentro da função sort tem uma comparação de (a, b) => a - b, por que o sort por padrão compara STRINGS e isso impede de comparar corretamente numeros.
