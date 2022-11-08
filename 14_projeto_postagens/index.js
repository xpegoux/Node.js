const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const { Post } = require('./models/Post'); //utilizar a tabela post

// Configurações

    // Template Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})); // /layouts/main.handlebars
        app.set('view engine', 'handlebars');

    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
    
// Rotas

    //pagina inicial
        app.get('/', (req, res) => {            
            //ordedenar e retornar todos os posts do db
            Post.findAll({order: [[`id`, 'DESC']]}).then((posts)=>{
                res.render('home', {posts: posts});
            });
        });

        //renderizar o html que contem o formulario!
        app.get('/cadPost', function(req, res){
            res.render('formulario');
        }); 

        //add é responsável por cadastradar o POST para o DB. E após isso, redirecionar para pagina inicial '/'
        app.post('/add', (req, res) =>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
                res.redirect('/');
        }).catch((erro) => {
                res.send("Ocorreu um erro: " + erro);
        });
        });

        app.get('/deletar/:id', (req, res) => {
        //apagando registros específicos do database
            Post.destroy({where: {'id': req.params.id}}).then(()=> {
                res.send("Sua postagem foi deletada!");
            }).catch((erro) => {
                res.send("Esta postagem não existe!");
            });
        });

app.listen(8081, () => 
{ console.log("Servidor Ativo em: http://localhost:8081/") });