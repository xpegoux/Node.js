const print = require('readline-sync');
class Milhar {
    #apostador
    #escolha
    #num_aposta = [];
    #num_sorteado = [];
    #carteira
    #valor_ap
    #ganhou
    constructor(apostador, carteira = 0) {
        this.#apostador = apostador
        if (this.#apostador.length < 3 || this.#apostador > 10) {
            console.error("Nome inválido!");
        }
        this.#num_sorteado = [];
        this.#num_aposta = [];
        this.#escolha;
        this.#carteira = carteira
        this.#valor_ap = 0;
        this.#ganhou = 0;
    }
    get saldo() {
        this.#carteira = (this.#carteira - this.#valor_ap);
        return this.#carteira <= 0 ? "Sem saldo!" : console.log(`Seu saldo: R$ ${this.#carteira.toFixed(2)}`);
    }      
    get apostador() { return this.#apostador; }
    get num_aposta() { return this.#num_aposta; }
    iniAposta() {
        let i, ii; //i -> for | ii -> do/while(case)
        let numAp = []; 
        this.#escolha = Number(print.question("Quantas milhares voce vai querer apostar? Escolha uma das options abaixo:\n[1] = 1 Milhar (Retorno: 1000000%)\n[2] = 2 Milhar (Retorno: 100000%)\n[3] = 3 Milhar (Retorno: 100%)\n[4] = 4 Milhar (Retorno: 50%)\n[5] = 5 Milhar (Retorno: 25%)\n[0] = Desistir da aposta\n---> "));
        this.#valor_ap = Number(print.question("Digite o valor de aposta: R$ "));
        if (this.#carteira <= 0) {
            console.error("Sem saldo para apostar!");            
        } else {
            switch(this.#escolha) {
                case 0:
                    break;
                case 1:                
                    for (i = 1; i <= this.#escolha; i++) {
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
                    for (i = 1; i <= this.#escolha; i++) {
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
                    for (i = 1; i <= this.#escolha; i++) {
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
                    for (i = 1; i <= this.#escolha; i++) {
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
                    for (i = 1; i <= this.#escolha; i++) {
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
    gerarResul() {
        let i;
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min); 
        console.log("##Resultado das Milhares Sorteadas##");
        for (i = 1; i <= 5; i++) {                  
            this.#num_sorteado[i] = random(1000, 10000);
            console.log(`${i} - ${this.#num_sorteado[i]}`);            
        }
        if (this.#escolha == 1) {
            for (i = 1; i <= 1; i++) {
                if (this.#num_sorteado[i] == this.#num_aposta[i]) {
                    console.log(`Você bateu na milhar -> ${this.#num_sorteado[i]}!!`);
                    this.#ganhou = this.#valor_ap;
                    this.#ganhou *= (10000) + (this.#ganhou);
                    console.log(`Seu prêmio é de: R$ ${this.#ganhou.toFixed(2)}`);
                    this.#carteira = this.#ganhou;
                } else {
                    console.log(`Sua milhar ${this.#num_aposta[i]} não foi contemplada!`);
                }
            }
        } else if (this.#escolha == 2 ) {
            for (i = 1; i <= 2; i++) {
                if (this.#num_sorteado[i] == this.#num_aposta[i]) {
                    console.log(`Você bateu na milhar -> ${this.#num_sorteado[i]}!!`);
                    this.#ganhou = this.#valor_ap;
                    this.#ganhou *= (1000) + (this.#ganhou);
                    console.log(`Seu prêmio é de: R$ ${this.#ganhou.toFixed(2)}`);
                    this.#carteira = this.#ganhou;
                } else {
                    console.log(`Sua milhar ${this.#num_aposta[i]} não foi contemplada!`);
                }
            }
        } else if (this.#escolha == 3 ) {
            for (i = 1; i <= 3; i++) {
                if (this.#num_sorteado[i] == this.#num_aposta[i]) {
                    console.log(`Você bateu na milhar -> ${this.#num_sorteado[i]}!!`);
                    this.#ganhou = this.#valor_ap;
                    this.#ganhou *= (1) + (this.#ganhou);
                    console.log(`Seu prêmio é de: R$ ${this.#ganhou.toFixed(2)}`);
                    this.#carteira = this.#ganhou;
                } else {
                    console.log(`Sua milhar ${this.#num_aposta[i]} não foi contemplada!`);
                }
            }
        } else if (this.#escolha == 4 ) {
            for (i = 1; i <= 4; i++) {
                if (this.#num_sorteado[i] == this.#num_aposta[i]) {
                    console.log(`Você bateu na milhar -> ${this.#num_sorteado[i]}!!`);
                    this.#ganhou = this.#valor_ap;
                    this.#ganhou *= (0,5) + (this.#ganhou);
                    console.log(`Seu prêmio é de: R$ ${this.#ganhou.toFixed(2)}`);
                    this.#carteira = this.#ganhou;
                } else {
                    console.log(`Sua milhar ${this.#num_aposta[i]} não foi contemplada!`);
                }
            }
        }  else if (this.#escolha == 5 ) {
            for (i = 1; i <= 5; i++) {
                if (this.#num_sorteado[i] == this.#num_aposta[i]) {
                    console.log(`Você bateu na milhar -> ${this.#num_sorteado[i]}!!`);
                    this.#ganhou = this.#valor_ap;
                    this.#ganhou *= (0,25) + (this.#ganhou);
                    console.log(`Seu prêmio é de: R$ ${this.#ganhou.toFixed(2)}`);
                    this.#carteira = this.#ganhou;
                } else {
                    console.log(`Sua milhar ${this.#num_aposta[i]} não foi contemplada!`);
                }
            }
        }      
    }
}
let a1 = new Milhar("Neto", 482.50);
console.log(a1.apostador);
a1.iniAposta();
a1.gerarResul();
a1.saldo;
