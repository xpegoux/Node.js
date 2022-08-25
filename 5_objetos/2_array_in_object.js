let joao = {
    nome: "João Reis",
    cursos: ["Análise e Desenvolvimento de Sistemas", "Estrutura de Dados", "Introdução a Computadores"], //array dentro de um objeto
    isActive: true,
    points: 2000
};

let jose = {
    nome: "José Silva",
    cursos: ["HTML", "CSS", "JavaScript"],
    isActive: true,
    points: 1100
};

let josue = {
    nome: "Josué Andrade",
    cursos: ["Sistema da Informação", "Pentest", "Redes de Computadores"],
    isActive: false,
    points: 5000
};

//criando uma array para receber a lista de objetos
let estudantes = [joao, jose, josue];

//criando um for para iterar e passar por todos os elementos do array estudantes

for (estudante of estudantes) {
    console.log(estudante); //retorna todas as informações dos objetos 
}
//Podemos também selecionar por propriedades:
for (estudante of estudantes) {
    console.log(estudante.nome); //retorna todas as informações da propriedade nome de todos os objetos
}

//E temos a forma tradicional de fazer o for
for (let i = 0; i < estudantes.length; i++) {
    console.log(estudantes[i].nome);
}

/*Para chamar apenas os estudantes ativos:
for (estudante of estudantes) {
    if (estudante.isActive) { // quando uma propriedade é booleana não precisa fazer comparações, ex = estudante.isActive === true, isso não é preciso.
        console.log(estudante.nome);
    }    
}
*/

//vamos selecionar os cursos de cada estudante, para isso teremos que fazer um for dentro de outro for, porque se fizer apenas um for, ele irá trazer a estrutura do array e não a propriedade separada.
for (estudante of estudantes) {
    console.log(`A ${estudante.nome} está cursando:`);
    for (curso of estudante.cursos) {
        console.log(`=> ${curso}`);
    }
    console.log("___________________________________________")
}