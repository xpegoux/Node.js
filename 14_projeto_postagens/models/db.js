const Sequelize = require('sequelize');
// Conexão com o DB MYSQL
const sequelize = new Sequelize('postapp', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true} //permitir querys
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};