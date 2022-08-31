/*
6. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.
*/
console.log("1 a 20 com quebra de linha!")
for (let num = 1; num <=20; num++) {
    console.log(num);
}

console.log("1 a 20 lado a lado!")
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let num_2 in list) {    
    console.log(list.join(" "));
}