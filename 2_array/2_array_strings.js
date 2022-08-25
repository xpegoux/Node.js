var alunos = ['ana', 'joão', 'lucas', 'marcos', 'maria']
console.log(`Alunos da lista: ${alunos}`);

alunos.pop(); //remove o ultimo dado do array
console.log(`Último aluno removido, lista atual: ${alunos}`);

alunos.shift(); //remove o primeiro dado do array
console.log(`Primeiro aluno removido, lista atual: ${alunos}`);

alunos.unshift('ruy'); //inclui um dado na primeira posição da lista
console.log(`Incluindo aluno ${alunos[0]} na primeira posição, lista atual: ${alunos}`);

alunos.push('levi'); //inclui um dado na ultima posição da lista
console.log(`Incluindo aluno ${alunos[4]} na última posição, lista atual: ${alunos}`);

console.log(`Posição de ${alunos[1]} -> ${alunos.indexOf('joão')}`) //mostra a posição de joão
console.log(`Total de posições do array -> ${alunos.length}`) //mostra o tamanho de posições da lista.