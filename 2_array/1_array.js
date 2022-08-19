//para criar um array basta criar uma variavel e defirnir ela com []; podendo ser vazia.
let num = [1, 25, 32];
console.log (`\narray atual/original-> ${num}`);

//o array vai até a posição 2, para por um número dentro de uma nova posição [3] por exemplo, basta receber conforme abaixo:
num[3] = 9;
console.log(`array número ${num[3]} criado no índice 3 -> ${num}`);

//definindo um valor na ultima posição do array, parecido com o de cima, porém não precisa especificar posições, ele já põe diretamente na ultima.
num.push(3); //dessa forma vai criar o 3 na ultima posição do array, criando um novo indice.
console.log(`array número ${num[4]} criado na ultima posição do índice -> ${num}`);

//num.length; -> comprimento de indices do array, ou seja, quantos elementos possui [0 ,1, 2, 3, 4] = 5.
console.log(`comprimento do array -> ${num.length} elementos`);

//ordenando o array em crescente
num.sort();
console.log(`array em ordem crescente -> ${num}`);

//percorrendo o array e chamando indivdualmente os valores dos elementos.
for (let i = 0; i < num.length; i++) {
    console.log(`Posição: ${i} --> ${num[i]}`);
}
console.log("")
//percorrendo o array com for simplificado (MAIS INDICADO)!
for (let pos in num) {
    console.log(`Posição: ${pos} --> ${num[pos]}`);
}

//buscando valores dentro de um array com indexOf();, OBS: É BUSCA POR VALOR DO ELEMENTO E NÃO POR POSIÇÃO DE INDICE!
console.log(`Busca pelo valor 1 na posição = ${num.indexOf(1)} <- existente`); //ele irá retornar a posição deste valor, se for inserido um valor que não existe no array, ele irá retornar -1
//exemplo de retorno de valor inexistente (-1);
console.log(`Busca pelo valor 7 na posição = ${num.indexOf(7)} <- inexistente`);
//Para legibilidade podemos atribuir isso a uma variavel:
let posicao = num.indexOf(9);
console.log(`Busca pelo valor 9 na posição= ${posicao}`);
