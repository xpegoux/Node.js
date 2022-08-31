/*
function soma(num_1, num_2) {
    return num_1 + num_2
}

console.log(soma(7, 3));
*/
//A função acima tem um problema, se for passado apenas um parâmetro será retornado um NaN(not a number), para corrigir, podemos definir os parâmetros de número = 0, para evitar que se for passado apenas um parâmetro, será considerado o único parâmetro passado, exemplo:

function soma(num_1=0, num_2=0) {
    return num_1 + num_2
}

console.log(soma(7)); // vai retornar apenas 7