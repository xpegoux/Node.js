const print = require('readline-sync');
let i, x;
let n = [];
let escolha;

escolha = Number(print.question("Quantas milhares voce vai querer apostar? Escolha uma das options abaixo:\n[1] = 1 Milhar\n[2] = 2 Milhar\n[3] = 3 Milhar\n[4] = 4 Milhar\n[0] = Desistir da aposta\n---> "));
if (escolha == 1) {               
    for (i = 1; i <= 5; i++) {                    
        do {
            x = false;                   
            n[i] = print.question(`Digite a sua milhar: `);
            if (n[i].length > "4" || n[i].length < "4") {
                console.error("\n[*]Por favor digite uma milhar!\n");
                x = true;
            } else {
                console.log(`${n[i]}`);            
            }
        } while (x == true) 
        console.log("fim do while");
    } console.log("fim do for");
}console.log("fim do if");