/*
Crie uma função que recebe um vetor e um número.
Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).
 */

const mostraIndice = (vetor, numero) => {
    for (let i in vetor) {
        if (vetor[i] == numero) {            
            console.log(`Número [${vetor[i]}] no índice [${i}]`);
        }
    }   
}
var array = [14, 14, 25, 36, 8, 9, 2, 14, 3, 19];
var num = 14;
mostraIndice(array, num);