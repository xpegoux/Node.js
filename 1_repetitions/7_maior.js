/*
7. Faça um programa que leia 5 números e informe o maior número.
*/
let num = [25, 36, 8, 1, 9], maior = 0;
for (let i in num) {      
    console.log(num[i]);
}
for (i = 1; i <= 5; i++) {
    if (num[i] > maior) {
        maior = num[i];
    }
}console.log(`Maior -> ${maior}`);