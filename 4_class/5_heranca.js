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
//Criando classe filha, através do ->extends<- + nomedaclassePAI.
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
//instanciando classe filha com atributos e métodos do pai
let c1 = new CarroCombate(50);//50 é equivalente a potencia de tiro (parametro da classe filha)
c1.setLigado = true; //nota-se que não temos este método na classe filha, porém ela está herdando da pai.
c1.info();

//instanciando outro objeto de combate
let c2 = new CarroCombate(100);
c2.tpComb = 1;
c2.setComb = 25;
c2.municao = 900;
c2.info();

//instanciando novo objeto com caracteristicas de transporte.
let c3 = new CarroTransp(90);
c3.setLigado = true;
c3.info();