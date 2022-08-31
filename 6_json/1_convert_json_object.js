/*
Vamos criar um objeto e converte-lo em formato JSON, depois, iremos pegar o formato JSON e converte-lo em objeto!
*/

//criando um objeto simples.
let carro = {
    marca:"BMW",
    ano:2015,
    cor:"Preto"
}

//convertendo objeto carro em formato JSON com a função stringify!
const jsonData = JSON.stringify(carro);

//mostrando formato JSON, que terá a saída: {"marca":"BMW","ano":2015,"cor":"Preto"}
console.log(jsonData);

//convertendo formato JSON em objeto com o parse.
const obj = JSON.parse(jsonData);
console.log(obj); //mostrando o objeto que era JSON e foi convertido, saída: { marca: 'BMW', ano: 2015, cor: 'Preto' }

/*
Nota-se que objetos a serem convertidos em JSON, não podem possuir comentários ou funções.
E que todo o arquivo JSON é preenchido com aspas "", tanto string quanto parametros.
*/
