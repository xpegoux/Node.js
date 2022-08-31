/*
4. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/
let pais_A = 80000; //3% ao ano
let pais_B = 200000; //1.5% ao ano
let ano = 0;

while (pais_A < pais_B) {
    pais_A = (pais_A * 0.03) + pais_A;
    pais_B = (pais_B * 0.015) + pais_B;
    ano++;
}
console.log(`O país A (${pais_A} pessoas) levou ${ano} anos para ultrapassar o país B (${pais_B} pessoas)`);