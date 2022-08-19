/*
1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
*/
let verificador = true;
const print = require('readline-sync');
let nota;

while (verificador == true) {
    verificador = false;
    nota = Number(print.question("Digite Nota: "));
    if (nota < 0 || nota > 10) {
        verificador = true;
        console.log("Nota inválida, tente novamente!");
    }
}