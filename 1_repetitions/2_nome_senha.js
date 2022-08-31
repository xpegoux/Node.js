/*
2. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 
*/
const print = require('readline-sync');
let verificador = true;
let user_name;
let pass;

while (verificador == true) {
    verificador = false;
    user_name = print.question("Nome de usuário: ");
    pass = print.question("Senha: ");
    
    if (user_name == pass) {
        console.log("Senha não pode ser igual ao nome de usuário!");
        verificador = true;
    }
}