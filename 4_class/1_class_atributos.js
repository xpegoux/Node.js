class Carro{
    //método construtor
    constructor(cor) {
        //this é para criação de atributos, ou seja, equivalente ao self, para referenciar a classe.
        this.cor = cor
        console.log(`Olá, sou um carro, de cor ${this.cor}`);
    }
}
 //para instanciar devemos usar o new + o nome da classe que será instanciada.
let carro_1 = new Carro("Vermelho");
let carro_2 = new Carro("Azul");
let carro_3 = new Carro("Verde");
let carro_4 = new Carro("Preto");