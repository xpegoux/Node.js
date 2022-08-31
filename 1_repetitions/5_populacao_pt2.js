/*
5. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
*/
const print = require("readline-sync");
let pais_A, taxa_A, pais_B, taxa_B;
let ano = 0;

pais_A = Number(print.question("Digite a quantidade populacional do País A (sem pontos ou vírgulas): "));
taxa_A = Number(print.question("Digite a taxa de crescimento anual do País A: "));
taxa_A *= 0.01;

pais_B = Number(print.question("Digite a quantidade populacional do País B (sem pontos ou vírgulas): "));
taxa_B = Number(print.question("Digite a taxa de crescimento anual do País B: "));
taxa_B *= 0.01;

if (pais_A < pais_B) {
    while (pais_A < pais_B) {
        pais_A = (pais_A * taxa_A) + pais_A;
        pais_B = (pais_B * taxa_B) + pais_B;
        ano++;
    }
    console.log(`O país A (${pais_A} pessoas) levou ${ano} anos para ultrapassar o país B (${pais_B} pessoas)`);

} else if (pais_B < pais_A) {
    while (pais_B < pais_A) {
        pais_B = (pais_B * taxa_B) + pais_B;
        pais_A = (pais_A * taxa_A) + pais_A;
        ano++;
    }
    console.log(`O país B (${pais_B} pessoas) levou ${ano} anos para ultrapassar o país A (${pais_A} pessoas)`);
}
