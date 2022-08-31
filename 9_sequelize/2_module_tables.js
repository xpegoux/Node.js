//Aqui no sequelize, usamos modules (módulos) para criar tabelas, se forma simplificada!
const Sequelize = require('sequelize');
const sequelize = new Sequelize('testedb', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});
/*
sequelize.authenticate().then(function() {
    console.log("Database Ativo!");
}).catch(function(erro) {
    console.log(erro);
})
--> Essa verificação do authenticate não é sempre necessário, uma vez que você viu que se autenticou corretamente, só excluir do codigo ou deixar comentado...
*/


//O module define({}), define o modelo da tabela.
//O primeiro parâmetro passamos o 'nome da tabela'.
//O segundo abrimos um objeto json {} e colocaremos dentro dela os dados das colunas que a tabela irá conter.
const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING //com esse comando eu estou dizendo que minha coluna titulo é do tipo VARCHAR
    },
    conteudo: {
        type: Sequelize.TEXT //a diferença do string para o text, é que o text é ilimitado de caracteres, o string possui limite 255.
    }
})
//Postagem.sync({force: true});

//Agora que definimos nosso module, geramos ele lá no MYSQL:
//Ao chamar o objeto com o module(Postagem), passamos o .sync() com o {force: true}, para forçar a criação da tabela, por precaução.
//E depois apagamos este código, para evitar recriações e reescrever a tabela.

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});
//Usuario.sync({force: true});

//Criando registros na tabela
Postagem.create({
    titulo: "Dark Souls",
    conteudo: "Melhor game de todos!"
});

Usuario.create({
    nome: "Neto",
    sobrenome: "Sullivan",
    idade: 24,
    email: "neto@mail.com"
});

//É sempre importante após gerar o create, excluí-lo do código também! O create({}) simplesmente vai criar um novo registro na sua tabela, e ai é só passar os campos a serem criados no registro da tabela postagem como o codigo acima.