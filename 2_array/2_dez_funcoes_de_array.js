const latinhas = ["Coca-cola", "Sprite"];

//1 - Função de inserir 
latinhas.push("It");
console.log(`1 -> Inserindo a marca "It" no array -> ${latinhas}`)
//----------------------------------------------------------------------------------------

//Funções para buscar
//2 - O método filter server para filtrar algo dentro do array passando um parâmetro
const filtrarLatinhas = latinhas.filter(latinha => { 
    return latinha !== "It"; //retornar todas as latinhas diferentes de It --> "Coca-cola", "Sprite"
});
console.log(`2 -> Usando o filter para filtrar: ${filtrarLatinhas}`);

//3 - O método find é similar ao filter, a diferença é que ele pega um único elemento no filtro.
const filtrarUmaLatinha = latinhas.find(latinha => {
    return latinha === "Coca-cola"
});
console.log(`3 -> Usando o find para filtrar: ${filtrarUmaLatinha}`);

//4 - O método includes() é diferente dos anteriores, ele retorna true/false para uma solicitação
//A sua solicitação pode ser passada também definindo a partir de qual posição ele pode começar a filtrar.
console.log(`Tem a latinha Coca-cola? ${latinhas.includes("Coca-cola")}`); //retorna true
console.log(`Tem a latinha Coca-cola a partir da posição 0? ${latinhas.includes("Coca-cola", 0)}`); //retorna true
console.log(`Tem a latinha It a partir posição 3? ${latinhas.includes("It", 3)}`); //retorna false, pois It está na posição 2, e só retorna true de 2 pra trás.
console.log(`Tem a latinha It a partir posição 2? ${latinhas.includes("It", 2)}`); //true
//este método includes é muito utilizado para condicionais para saber se encontrou ou não determinado elemento.
//----------------------------------------------------------------------------------------

//Update
// 5 - Atualizando array, se o array fosse um let, poderiamos atualiza-lo sem precisar criar um novo array
//Como no nosso caso é uma const então vamos criar um novo array e atualiza-lo
const novasLatinhas = [...latinhas, "Fanta"];
console.log(novasLatinhas);

// 6 - slice é outro método interssante, singifica "cortar", ou seja, você vai selecionar a posição que deseja retirar do array:
console.log(novasLatinhas.slice(1)); //vai retirar a Coca-cola

//7 - pop remove item do array, a diferença é que ele remove do array original, enquanto o slice e o ... removem itens de um novo array.
latinhas.pop(); //sempre vai ser o ultimo elemento por default
console.log(latinhas);

//Transforms, são metodos de transformações
//8 - map, faz com que um determinado array se transforme em outro
const cocas = novasLatinhas.map(function(coca){
    return "Coca-cola";
});
console.log(cocas);

//9 - reverse, o nome é auto explicativo, reverte os elementos do array.

const reverseLatinhas = latinhas.reverse();
console.log(reverseLatinhas);

// 10 - forEach, é uma interação com o array, ele não o afeta apenas percorre cada elemento e apresenta da forma que for feita pelo programador
latinhas.forEach(function(latas){ //o forEach requer uma função com parâmetro para retornar tudo dentro do array
    console.log(latas);
});
console.log("----")
novasLatinhas.forEach(latas => {
    console.log(latas);
});