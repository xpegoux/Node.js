const fs = require('fs')

//se houver necessidade de alterar o arquivo
const nome_arquivo = "/teste.txt";

//diretorio do arquivo
const path = __dirname + `${nome_arquivo}`;

//texto de teste para criar o arquivo
const newArquivo = "";

function meuLeitorDeArquivo(caminho) {
    //o método fs requer um parâmetro que é o caminho para ler o arquivo, e também o formato e erro.
    fs.readFile(caminho, "utf-8", function(error, data){
        if(error) {
            console.log("Erro de leitura: " +error.message)
        } else {
            console.log(data);
        }
    })
}

//caso não exista arquivo, passar esta função primeiro para criar!
function meuEscritorDeArquivo(caminho, texto) {
    fs.writeFile(caminho, texto, function(error){
        if (error) {
            console.error("Erro de escrita" + error.message)
        } else {
            console.log("Escreveu com sucesso em: " + caminho)
        }
    })
}

meuLeitorDeArquivo(path);
meuEscritorDeArquivo(path, newArquivo);