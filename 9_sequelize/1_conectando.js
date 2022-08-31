//importando o sequelize do node_modules com S maiusculo pois iremos instancia-lo.
const Sequelize = require('sequelize');
/*O parametro passado no objeto new Sequelize, testedb é referente ao banco de dados que desejamos conectar.
Depois temos root e root, o primeiro é o usuario do meu banco de dados e o segundo é a senha.
E o ultimo parâmetro iremos abrir um objeto JSON {} e dentro dele iremos por o host e dialect, onde host é o local onde o banco de dados está alocado que é na nossa máquina localhost, e o dialect é referente ao tipo de banco que é o mysql.*/
const sequelize = new Sequelize('testedb', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});
sequelize.authenticate().then(function() {
    console.log("Database Ativo!");
}).catch(function(erro) {
    console.log(erro);
}) 
/*sequelize.authenticate() Verifica se a conexão com o banco deu certo, porém ela sozinha não surte nenhum efeito, então passamos as funções .then().catch().
//Onde a then irá mostrar um console.log se a conexão der certo, e a catch apresenta o erro se não funcionar!
A then é como se fosse uma função de callback, ela é especial porque só é executada quando algum evento acontece, ou seja, a sequelize.authenticate gera um evento que acionará tanto then quanto catch.*/