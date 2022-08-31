const Sequelize = require('sequelize');
const sequelize = new Sequelize('testedb', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});