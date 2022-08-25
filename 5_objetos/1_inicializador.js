/*
Em JS praticamente tudo é objeto, então, existem diversas formas de criação de objeto, as mais comuns são as inicializadoras e construtoras.
Na pasta 4_classes dará inicio as funções construtoras e a pasta 5_objetos dará início as inicializadoras.
*/
//primeiramente para criar um objeto inicializador é bem simples, basta criar uma variável qualquer e atribui-la as chaves {}, tudo dentro de chaves será objeto, as propriedades do objeto são definidas por nomes e valores, e os métodos são por funções.
let carro = {
    marca: "BMW",
    //criando um método andar com função tradicional.:
    preco: "80000",
    andar: function() {
        return console.log("Andando..."); 
    },
    //criando um método andar com arrow function.:
    andar2: () => console.log("Andando de novo...."),
    //criando um método sem passar a function, o js entenderá através do () que a palavra pararDeAndar() será um método!
    pararDeAndar() {
        console.log("Cansei")
    }

}

console.log(carro); //retorna todas as propriedades e métodos do objeto.

//chamando propriedades e metodos individualmente
console.log(carro.marca); //propriedade marca
console.log(carro.preco); // propriedade preco
carro.andar(); //metodo andar com funcao tradicional
carro.andar2(); //metodo andar com arrow function
carro.pararDeAndar();//metodo pararDeAndar simplificado.

/*
Podemos retornar objetos dentro de uma função também:
*/

//criando uma função arrow 
const nomeMaiusculo = (nome) => {
    return { //retornando um objeto
        grande() { 
            console.log(`Deixando seu nome maiúsculo: ${nome.toUpperCase()}`)
        }
    }
}
nomeMaiusculo("neto").grande();