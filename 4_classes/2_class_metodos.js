class Carro{
    //método construtor
    constructor(cor, modelo, marca) {
        //this é para criação de atributos, ou seja, equivalente ao self, para referenciar a classe.
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
        this.estado = false;
        this.km = 0;
        this.combustivel = 10;
    }
    //criando um método para apresentar a cor do carro.
    info(){
        console.log(`Marca.............: ${this.marca}`);
        console.log(`Modelo............: ${this.modelo}`);
        console.log(`Cor...............: ${this.cor}`);        
        console.log(`Estado............: ${this.estado == true ? "Ligado" : "Desligado"}`);
        console.log(`KM................: ${this.km}`);
        console.log(`Combustível.......: ${this.combustivel}`);
        console.log("---------------------------------");

    }
    ligar(){
        this.estado = true;
    }
    desligar(){
        this.estado = false;
    }

}
 //para instanciar devemos usar o new + o nome da classe que será instanciada.
let carro_1 = new Carro("BMW", "SUV","Preto");
let carro_2 = new Carro("Ferrari", "Sport", "Vermelho");
let carro_3 = new Carro("Lamborguini", "Sport", "Amarelo");

carro_1.ligar();
carro_1.info();

carro_2.ligar();
carro_2.info();

carro_3.info();