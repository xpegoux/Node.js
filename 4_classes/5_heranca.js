//Criando classe PAI.
class Carro{
    #qtdComb;
    #estado;
    #tipoComb;
    #cor
    constructor(tipoComb, cor) {
        this.#qtdComb = 100;
        this.#estado = true;
        this.#tipoComb = tipoComb;
        this.#cor = cor
    }
    get info(){
        console.log(`Quantidade de Combustível...: ${this.#qtdComb}`);

        if (this.#estado == true) {
            console.log(`Estado......................: Ligado`);
        } else {
            console.log(`Estado......................: Desligado`);
        }

        if (this.#tipoComb == 1) {
            console.log(`Tipo de Combustível:........: Gasolina`);
        } else if (this.#tipoComb == 2) {
            console.log(`Tipo de Combustível:........: Diesel`);
        } else if (this.#tipoComb == 3 ) { 
            console.log(`Tipo de Combustível:........: Etanol`);;
        } else {
            console.log(`Tipo de Combustível:........: Inválido`);
        }
        console.log(`Cor.........................: ${this.#cor}`);
        console.log("---------------------------------");
    }    
    set estadoSet(est) {
        this.#estado = est;
    }
    get qtdComb() {
        return this.#qtdComb;
    }
    set qtdComb(qtd) {
        if (qtd < 0 || qtd > 100){
            console.error("Valor inválido");
        } else {
            this.#qtdComb = qtd;
        }
    }

}
//Criando classe filha, através do ->extends<- + nomedaclassePAI.
class CarroCorrida extends Carro {
    constructor() { //para acessar o construtor da classe pai, primeiro deve definir o construtor filho e depois o super.
        super(2, "Azul") //acessando o construtor da classe pai.
    }
}


let corrida = new CarroCorrida();

corrida.info;
corrida.estadoSet = false; //nota-se que não temos este método na classe filha, porém ela está herdando da pai.