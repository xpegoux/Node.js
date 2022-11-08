const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = {
    Post: Post
};


//Post.sync({force: true}); -> Cria a tabela! Executa-lo apenas uma vez, pois se executar posteriormente irá recriar a tabela e sobrescrever os registros.