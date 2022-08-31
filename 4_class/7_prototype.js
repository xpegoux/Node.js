//O prototype vai representar o protótipo da classe
Object.prototype //Esse comando representa o protótipo do objeto, que é a forma instanciada da classe, basicamente ele serve para criar ou sobrescrever métodos e atributos da classe.
//Criando classe PAI.
class Carro{
    #qtdComb;
    #ligado;
    #tpComb;
    #tpCarro;
    constructor(tpComb, tpCarro) {
        this.#qtdComb = 100;
        this.#ligado = false;
        this.#tpComb = tpComb; //gasolina, diesel, etanol
        this.#tpCarro = tpCarro; //passeio, transporte, combate
        
    }
    info(){
        console.log(`Quantidade de Combustível...: ${this.#qtdComb}`);
        console.log(`Ligado......................: ${(this.#ligado ? "Sim" : "Não")}`);
        if (this.#tpCarro == 1) {
            console.log(`Tipo de Carro...............: Passeio`);
        } else if (this.#tpCarro == 2) {
            console.log(`Tipo de Carro...............: Transporte`);
        } else if (this.#tpCarro == 3) {
            console.log(`Tipo de Carro...............: Combate`);
        } else {
            console.log(`Tipo de Carro...............: Inválido!!`);
        }
        //
        if (this.#tpComb == 1) {
            console.log(`Tipo de Combustível:........: Gasolina`);
        } else if (this.#tpComb == 2) {
            console.log(`Tipo de Combustível:........: Diesel`);
        } else if (this.#tpComb == 3 ) { 
            console.log(`Tipo de Combustível:........: Etanol`);;
        } else {
            console.log(`Tipo de Combustível:........: Inválido`);
        }
    }
    set setLigado(t) {
        this.#ligado = t;
    }
    get getLigado() {
        this.#ligado;
    }
    get getComb() {
        return this.#qtdComb;
    }
    set setComb(v) {
        if (v < 0 || v > 100){
            console.error("Valor inválido");
        } else {
            this.#qtdComb = v;
        }
    }
    get tpComb() {
        return this.#tpComb;
    }
    set tpComb(tp) {
        this.#tpComb = tp;
    }
}
class CarroCombate extends Carro {
    constructor(poTiro) { //para acessar o construtor da classe pai, primeiro deve definir o construtor filho e depois o super.
        super(3, 3); //acessando o construtor da classe pai.
        //criando abaixo propriedades pertinentes à somente para classe filha.
        this.municao = 1000;
        this.poTiro = poTiro;
        this.blindagem = 100;
    }
    info() { //se fosse definido as info com o mesmo nome do método pai, ele iria cancelar o método info() do pai, então criamos info2() para imprimir tanto do pai quanto do filho, para imprimir o método do pai basta chamar o super.info().
        super.info(); //chamando metodo info do pai sem interferir no info() do filho.
        console.log(`Quantidade de tiros..: ${this.municao}`);
        console.log(`Potência do tiro.....: ${this.poTiro}`);
        console.log(`Blindagem............: ${this.blindagem}`);
        console.log("-------------------------------------------")
    }
}
class CarroTransp extends Carro {
    constructor() {
        super(2, 2);
    }
    
}
let c1 = new CarroCombate(50);
c1.setLigado = true;
c1.info();

let c2 = new CarroCombate(100);
c2.tpComb = 1;
c2.setComb = 25;
c2.municao = 900;
c2.info();

let c3 = new CarroTransp(90);
c3.setLigado = true;
c3.info();