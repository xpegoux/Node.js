const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
	// Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Conexão com o DB
    const sequelize = new Sequelize('testedb', 'root', 'root', {
        host: "localhost",
        dialect: 'mysql'
    });

// Rotas

app.get("/cadastro", function(req, res){
    res.render('formulario');
});

app.listen('8081', () => console.log("Servidor Ativo em: http://localhost:8081/"));