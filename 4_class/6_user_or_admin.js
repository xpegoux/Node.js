/*
Crie uma classe usuário que deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe.

Crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".

A classe "Admin" por sua vez não recebe parâmetros próprios apenas e-mail e senha da classe pai (super). Deve ser criada uma propriedade interna this.admin = true em seu construtor.

Agora com suas classes formatadas, adicione um método(função) na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não. (Realizando um if).

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
*/

class Usuario{
    #senha
    #email
    constructor(email, senha) {
        this.#senha = senha;
        this.#email = email;
    }
    get email() {
        return this.#email;
    }
    isAdmin() {        
        if (this.admin == Usuario) {
            this.admin = false;
            return this.admin;
        } else {
            return this.admin;
        }
    }
}
class Admin extends Usuario {        
    constructor() {        
        super();
        this.admin = true;
    }
}

const user1 = new Usuario("email@teste.com","senha123");
const admin1 = new Admin("admin@teste.com", "root123")
console.log(user1.isAdmin());
console.log(admin1.isAdmin());