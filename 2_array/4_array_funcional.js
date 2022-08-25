/*
filter, map e reduce, são métodos especiais de manipulação de arrays de forma funcional.
Temos a seguinte base dados do array empresas abaixo.
Para exercitar filter, map e reduce vamos fazer as seguintes solicitações:

1 - Empresas criadas depois dos anos 2000.
2 - O nome de cada empresa e seu CEO.
3 - O valor de todas as empresas somadas.
*/
const empresas = [
    { nome:'Samsung',valorDeMercado: 5000000.00, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415000000.00, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117000000.00, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383000000.00, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30000000.00, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845000000.00, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

//Para a primeira meta, iremos utilizar o filter, que pelo próprio nome fará um filtro na propriedade anoDeCriacao. Basta acessar a propriedade com empresas.anoDeCriacao criar uma constante para receber o filter e printar o mesmo.

const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));
console.log(anoDeCriacao);

//Para a segunda meta, utilizaremos o map, com ele é possível percorrer todos os elementos do array, executar alguma transformação nesses elementos e retornar um novo array sem modificar o atual.

const exibeInformacoes = empresas.map(empresa => `${empresa.nome} CEO: ${empresa.CEO}`);
console.log(exibeInformacoes);

/*Por fim a última meta, utilizaremos o reduce, que passará por cada elemento fazendo uma expressão escolhida, e no final devolver um único valor.

Ele recebe dois valores, um acumulado e um atual, no nosso caso o acumulado irá somar com o atual. 

Como no primeiro loop da soma não temos nenhum valor acumulado, então precisamos passar como segundo parâmetro esse valor, que no nosso caso vai ser 0. Se não tivéssemos passado um valor de acumulado o `reduce` pegaria o primeiro item do array, tomando o como se fosse o valor acumulado.*/

const total = empresas.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valorDeMercado);
}, 0);
console.log(`R$ ${total.toFixed(2)}`);