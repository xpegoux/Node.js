//importando o express para o uso dos http methods, como ela está dentro da pasta node_modules, não é preciso passar o diretório completo.
const express = require('express'); 

//atribuindo o express(); a uma constante que será muito utilizada para acessar os métodos.
const app = express(); 

//vamos criar a nossa rota com uma mensagem, geralmente uma rota principal da página web é atribuida a barra '/'.
app.get("/project", (request, response) => {
	return response.send("Praise The Sun!"); //send serve para enviar algo, no nosso caso enviamos uma mensagem para a rota '/project'.
});

//criando outras rotas na url
app.get("/sobre", (resquest, response) => {response.send("Aluno: Erivaldo, estudante back-end!");});
app.get("/blog", (request, response) => {response.send("Não possuo blog hehe :P");});

//parâmetros de rota
app.get("/ola/:cargo/:nome", (request, response) => {
    response.send(`<h1>Olá, ${request.params.nome}!</h1><h2>Cargo: ${request.params.cargo}</h2>`); //o send só pode ser enviado uma única vez dentro de uma rota.
    
});

//enviando arquivos HTML para a página, como sabemos a raiz de uma página principal é '/', então vamos criar um index.html numa pasta a parte, e importa-lo para a raiz.

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/html/index.html");
});


//utilizando o listen do express para habilitar uma porta do servidor, para testes iremos usar a localhost 3333, mas existem portas específicas para cada serviço na rede. Lembrando que o método listen tem que ser o último do nosso código.

//quando o listen é ativado, ele cria um evento e com esse evento nós podemos criar uma função callback para deixar alguma mensagem no nosso servidor.
app.listen(3333, () => console.log("Servidor ativo na URL http://localhost:3333/")); // () => esta arrow é para mostrar a mensagem no terminal quando o node ativar o servidor.

//após criar a rota podemos fazer a ligação com o servidor através do comando node src/index.js/projects (node diretorio/arquivo.js).