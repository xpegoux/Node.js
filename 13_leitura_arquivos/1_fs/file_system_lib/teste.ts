import fs from 'fs';
import readline from 'readline-sync';
const arquivo = "teste.txt";
class Arquivo {
    
    escrever() {
        let escreveu = readline.question("->");
        fs.writeFile(arquivo, escreveu, {
            encoding: 'utf-8', flag: 'a' //paramentro para não sobrescrever os textos
        }, (err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Arquivo escrito!");
            }
        });
    }

    ler() {
        fs.readFile(arquivo, "utf-8", (err, data) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(data); //conteudo do arquivo
            }
        });
    }
}

let leitor = new Arquivo();

//leitor.escrever();
leitor.ler();