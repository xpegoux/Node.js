/*
Calculando um fatorial de forma tradicional:

function fatorial(numero) {
    let fat = 1;
    for (let c = numero; c > 1; c--) {
        fat *= c;        
    }
    return fat;
}
console.log(fatorial(4));
*/

//Uma função recursiva é utilizar uma função dentro de outra função, no exemplo abaixo a função fatorial vai ser chamada dentro dela mesma.
//Calculando fatorial com função recursiva.
function fatorial(numero) {
    if (numero == 1) {
     return 1;
    } else {
     return numero * fatorial(numero - 1)
    }
 }
 console.log(fatorial(5));