class Carro{
    #cor;
    #modelo;
    #marca;
    #estado;
    #km;
    #combustivel;
    /*static, este método deve ser invocado antes do método construtor,
    após invocado, pode ser utilizado tanto para atributos quanto para métodos!
    O static mode faz com que o método ou atributo estático, ao ser utilizado por um objeto, todos os outros objetos
    terão as mesmas características estáticas.
    Para chamar o alerta dentro da classe ou fora, deve ser utilizado o Nomedaclasse.static*/
    static alerta=true //criando um atributo estatico.
    //método construtor
    constructor(cor, modelo, marca) {
        //this é para criação de atributos, ou seja, equivalente ao self, para referenciar a classe.
        this.#cor = cor;
        this.#modelo = modelo;
        this.#marca = marca;
        this.#estado = false;
        this.#km = 0;
        this.#combustivel = 10;
    }
    //criando um método para apresentar a cor do carro.
    get info(){
        console.log(`Marca.............: ${this.#marca}`);
        console.log(`Modelo............: ${this.#modelo}`);
        console.log(`Cor...............: ${this.#cor}`);        
        console.log(`Estado............: ${this.#estado ? "Ligado" : "Desligado"}`);
        console.log(`KM................: ${this.#km}`);
        console.log(`Combustível.......: ${this.#combustivel}`);
        console.log(`Está em alerta?...: ${Carro.alerta ? "Sim" : "Não"}`); //chamando o static, vejam que os outros objetos irão herdar a mesma condição ternária.
        console.log("---------------------------------");

    }
    get ligar(){
        this.#estado = true;
    }
    get desligar(){
        this.#estado = false;
    }

}
 //para instanciar devemos usar o new + o nome da classe que será instanciada.
let carro_1 = new Carro("BMW", "SUV","Preto");
let carro_2 = new Carro("Ferrari", "Sport", "Vermelho");
let carro_3 = new Carro("Lamborguini", "Sport", "Amarelo");
Carro.alerta=false; //invocando o static para todos os objetos.
carro_1.ligar;
carro_1.info;

carro_2.ligar;
carro_2.info;

carro_3.info;