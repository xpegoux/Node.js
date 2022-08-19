/*
function par_impar(numero){
    if (numero % 2 == 0) {
        return console.log(`${numero} é par!`);
    } else {
        return console.log(`${numero} é impar!`);
    }
}
par_impar(9)

Ou pode ser feito da seguinte forma também:
*/
function par_impar(numero){
    if (numero % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
let resultado = par_impar(2);
console.log(resultado);
//ou podemos chamar direto da função!
console.log(par_impar(9))