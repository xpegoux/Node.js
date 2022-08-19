/*
3. Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
*/
const print = require('readline-sync');
let nome, sexo, estadoCivil;
let x = false;

do {    
    nome = print.question("Nome [Acima de 3 caracteres]: ");
    sexo = print.question("Sexo [F ou M]? ");
    estadoCivil = print.question("Estado Civil: [S = Solteiro(a)] [C = Casado(a)] [V = Viuvo(a)] [D = Divorciado(a)]\n-> ")

    if (nome.length < 3) {
        console.log("Digite nome com mais de três caracteres!");
        x = true;
    } else if (sexo != "F" && sexo != "M") {
        console.log("Digite apenas F para feminino ou M para masculino!!!!");
        x = true;
    } else if (estadoCivil != "S" && estadoCivil != "C" && estadoCivil != "V" && estadoCivil != "D") {
        console.log("Digite um estado civil correto (S, C, V, D)");
        x = true;
    } else {
        console.log(`Seu cadastro está completo!\nNome -> ${nome}\nSexo -> ${sexo}\nEstado Civil -> ${estadoCivil}`);
        x = false;
    }

} while (x == true);