var listaDeAnimais = ["Cachorro", "Gato", "Leão", "Boto", "Coruja"];
var primeiroElemento = listaDeAnimais[0];// retorna o elemento Cachorro
var pos = listaDeAnimais.indexOf("Cachorro");//retorna o índice 0
console.log(primeiroElemento, pos);

listaDeAnimais.unshift("Coelho"); //inserir elemento no inicio do array
console.log(listaDeAnimais);

listaDeAnimais.push("Cobra"); //inserir elemento no final do array
console.log(listaDeAnimais);

listaDeAnimais.shift();
console.log(listaDeAnimais); //remove o primeiro elemento do array

listaDeAnimais.pop();
console.log(listaDeAnimais); //remove o último elemento do array