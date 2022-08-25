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
    get premio() {
        if (this.#ganhou == 0) {
            return console.log(`Você ainda não ganhou!`)
        } else {
            return console.log(`Parabéns você ganhou o prêmio no valor de R$ ${this.#ganhou}`)
        }
    }
    get saldo() { return console.log(`Seu saldo: R$ ${this.#carteira.toFixed(2)}`) }      
    get apostador() { return `Apostador: ${this.#apostador}`; }
    get num_aposta() { return this.#num_aposta; }
    iniAposta() {
        let i, ii, sair; //i -> for | ii -> do/while(case) | sair -> sair da aposta!
        let numAp = []; //numero de aposta digitado
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min);  //gerar numeros aleatorios
        do { //este do é para realizar uma verificação final, se deseja continuar na aposta.
            console.log(`Você possui R$ ${this.#carteira.toFixed(2)} para apostar! Boa sorte!\n`)
            this.#valor_ap = Number(print.question("Digite o valor de aposta: R$ "));
            if (this.#carteira <= 0 || this.#valor_ap > this.#carteira) {
                console.error("[*] Sem saldo para apostar!" + " Sua carteira: R$ " + this.#carteira.toFixed(2));                        
            } else {
                this.#carteira -= this.#valor_ap;
                this.#escolha = Number(print.question("Quantas milhares voce vai querer apostar? Escolha uma das options abaixo:\n[1] = 1 Milhar (Retorno: 1000000%)\n[2] = 2 Milhar (Retorno: 100000%)\n[3] = 3 Milhar (Retorno: 100%)\n[4] = 4 Milhar (Retorno: 50%)\n[5] = 5 Milhar (Retorno: 25%)\n[0] = Desistir da aposta\nResponda:  ")); 
                //cada case do switch, já vai conter as perguntas, resultados e premiações, cada caso é respectivo ao que for selecionado!
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
                        }
                        console.log("##Resultado das Milhares Sorteadas##");
                        for (i = 1; i <= 5; i++) {                  
                            this.#num_sorteado[i] = random(1000, 10000);
                            console.log(`${i} - ${this.#num_sorteado[i]}`);
                        }
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
                        break;
                    case 2:
                        for (i = 1; i <= this.#escolha; i++) {
                            do {
                                ii = false;
                                numAp[i] = (print.question(`Digite a sua ${i} milhar: `));
                                if (numAp[i].length > "4" || numAp[i].length < "4") {
                                    console.error("\n[*] Por favor digite uma milhar!\n");
                                    ii = true;
                                } else if (numAp[i] == numAp[i-1]) {
                                    console.error(`Favor, não digitar números iguais!`);
                                    ii = true;
                                } else {
                                    this.#num_aposta[i] = numAp[i];
                                }
                            } while (ii == true);
                        }
                        console.log("\n##Resultado das Milhares Sorteadas##");
                        for (i = 1; i <= 5; i++) {                  
                            this.#num_sorteado[i] = random(1000, 10000);
                            console.log(`${i} - ${this.#num_sorteado[i]}`);
                        }
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
                        break;
                    case 3:
                        for (i = 1; i <= this.#escolha; i++) {
                            do {
                                ii = false;
                                numAp[i] = (print.question(`Digite a sua ${i} milhar: `));
                                if (numAp[i].length > "4" || numAp[i].length < "4") {
                                    console.error("\n[*] Por favor digite uma milhar!\n");
                                    ii = true;
                                } else if (numAp[i] == numAp[i-1] || numAp[i] == numAp[i-2]) {
                                    console.error(`Favor, não digitar números iguais!`);
                                    ii = true;                                
                                } else {
                                    this.#num_aposta[i] = numAp[i];
                                }
                            } while (ii == true);
                        }
                        console.log("##Resultado das Milhares Sorteadas##");
                        for (i = 1; i <= 5; i++) {                  
                            this.#num_sorteado[i] = random(1000, 10000);
                            console.log(`${i} - ${this.#num_sorteado[i]}`);
                        }
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

                        break;
                    case 4:
                        for (i = 1; i <= this.#escolha; i++) {
                            do {
                                ii = false;
                                numAp[i] = (print.question(`Digite a sua ${i} milhar: `));
                                if (numAp[i].length > "4" || numAp[i].length < "4") {
                                    console.error("\n[*] Por favor digite uma milhar!\n");
                                    ii = true;
                                }
                                else if (numAp[i] == numAp[i-1] || numAp[i] == numAp[i-2] || numAp[i] == numAp[i-3]) {
                                    console.error(`Favor, não digitar números iguais!`);
                                    ii = true;                                
                                } else {
                                    this.#num_aposta[i] = numAp[i];
                                }
                            } while (ii == true);
                        }
                        console.log("##Resultado das Milhares Sorteadas##");
                        for (i = 1; i <= 5; i++) {                  
                            this.#num_sorteado[i] = random(1000, 10000);
                            console.log(`${i} - ${this.#num_sorteado[i]}`);
                        }
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
                        break;
                    case 5:
                        for (i = 1; i <= this.#escolha; i++) {
                            do {
                                ii = false;
                                numAp[i] = (print.question(`Digite a sua ${i} milhar: `));
                                if (numAp[i].length > "4" || numAp[i].length < "4") {
                                    console.error("\n[*] Por favor digite uma milhar!\n");
                                    ii = true;
                                } else if (numAp[i] == numAp[i-1] || numAp[i] == numAp[i-2] || numAp[i] == numAp[i-3] || numAp[i] == numAp[i-4]) {
                                    console.error(`Favor, não digitar números iguais!`);
                                    ii = true;                                
                                } else {
                                    this.#num_aposta[i] = numAp[i];
                                }
                            } while (ii == true);
                        }
                        console.log("##Resultado das Milhares Sorteadas##");
                        for (i = 1; i <= 5; i++) {                  
                            this.#num_sorteado[i] = random(1000, 10000);
                            console.log(`${i} - ${this.#num_sorteado[i]}`);
                        }
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
                        break;
                    default:
                        console.error("\n[*] Opção inválida, por favor tente novamente!");
                        break;
                }                
            }
            do {
                sair = print.questionInt("\nDeseja continuar a aposta?\nDigite [1] - Sim\nDigite [2] - Nao\nResponda: ");
                if (sair != 1 && sair != 2) {
                    console.error("\n[*] Opção inválida! Tente novamente!\n")
                }
            } while (sair != 1 && sair != 2);
        } while(sair == 1);
    }
}

let a1 = new Milhar("", 0);
console.log(a1.apostador);
a1.iniAposta();
a1.saldo;
a1.premio;

/*
Correções

Desafios
Proximo desafio, será criar uma função para mostrar o histórico de numeros sorteados anteriormente
*/