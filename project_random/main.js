const print = require('readline-sync');
class Milhar {
    #apostador
    #num_aposta = [];
    #num_sorteado = [];
    constructor(apostador) {
        this.#apostador = apostador
        if (this.#apostador.length < 3 || this.#apostador > 10) {
            console.error("Nome inválido!");
        }
        this.#num_sorteado = [];
        this.#num_aposta = [];
    }
    get apostador() {
        return this.#apostador;
    }
    get num_aposta() {
        return this.#num_aposta;
    }
    iniAposta() {
        let i, ii; //i -> for | ii -> do/while
        let numAp = [];
        let escolha = Number(print.question("Quantas milhares voce vai querer apostar? Escolha uma das options abaixo:\n[1] = 1 Milhar\n[2] = 2 Milhar\n[3] = 3 Milhar\n[4] = 4 Milhar\n[5] = 5 Milhar\n[0] = Desistir da aposta\n---> "));
        switch(escolha) {
            case 0:
                break;
            case 1:
                for (i = 1; i <= escolha; i++) {
                    do {
                        ii = false;
                        numAp[i] = (print.question(`Digite a sua milhar: `));
                        if (numAp[i].length > "4" || numAp[i].length < "4") {
                            console.error("\n[*] Por favor digite uma milhar!\n");
                            ii = true;
                        } else {
                            this.#num_aposta[i] = numAp[i];
                        }
                    } while (ii == true);
                } break;
            case 2:
                for (i = 1; i <= escolha; i++) {
                    do {
                        ii = false;
                        numAp[i] = (print.question(`Digite a sua ${i} milhar: `));
                        if (numAp[i].length > "4" || numAp[i].length < "4") {
                            console.error("\n[*] Por favor digite uma milhar!\n");
                            ii = true;
                        } else {
                            this.#num_aposta[i] = numAp[i];
                        }
                    } while (ii == true);
                } break;
            case 3:
                for (i = 1; i <= escolha; i++) {
                    do {
                        ii = false;
                        numAp[i] = (print.question(`Digite a sua ${i} milhar: `));
                        if (numAp[i].length > "4" || numAp[i].length < "4") {
                            console.error("\n[*] Por favor digite uma milhar!\n");
                            ii = true;
                        } else {
                            this.#num_aposta[i] = numAp[i];
                        }
                    } while (ii == true);
                } break;
            case 4:
                for (i = 1; i <= escolha; i++) {
                    do {
                        ii = false;
                        numAp[i] = (print.question(`Digite a sua ${i} milhar: `));
                        if (numAp[i].length > "4" || numAp[i].length < "4") {
                            console.error("\n[*] Por favor digite uma milhar!\n");
                            ii = true;
                        } else {
                            this.#num_aposta[i] = numAp[i];
                        }
                    } while (ii == true);
                } break;
            case 5:
                for (i = 1; i <= escolha; i++) {
                    do {
                        ii = false;
                        numAp[i] = (print.question(`Digite a sua ${i} milhar: `));
                        if (numAp[i].length > "4" || numAp[i].length < "4") {
                            console.error("\n[*] Por favor digite uma milhar!\n");
                            ii = true;
                        } else {
                            this.#num_aposta[i] = numAp[i];
                        }
                    } while (ii == true);
                } break;
            default:
                console.error("\n[*] Opção inválida, por favor tente novamente!");
                break;
        }
    }
}
let a1 = new Milhar("José");
console.log(a1.apostador);
a1.iniAposta();

/*
usuario vai dar entrada de uma milhar (OK)
o sistema irá responder a milhar gerada randomicamente(5 milhar).
se a milhar do usuario for igual ao do sistema, o usuario ganhou, se não, perdeu!

apos validar acima, melhorar o sistema fazendo-o receber parametros de cotação como capital inicial do usuario.


classe Milhar
-apostador
-num_aposta[]
-sorteado[]

apostar()
sorteio()
*/