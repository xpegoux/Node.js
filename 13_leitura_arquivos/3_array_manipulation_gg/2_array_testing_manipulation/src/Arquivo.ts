import readline from 'readline-sync';

export class Arquivo {
    private arquivo: string[] = [];
    constructor() {
        this.arquivo;
    }
    //executar o código principal
    main() {
        do {
            this.menu();
            this.option();
            var resp = readline.questionInt("\nDeseja retornar ao menu?\n1 - [Yes]\n2 - [No]\n--> ");
            if (resp == 1) {
                console.clear();
            }
        } while (resp == 1);
    }
    //menu interativo
    private menu() {
        console.log("----------------------");
        console.log("[1] - Inserir linha");
        console.log("[2] - Deletar linha");
        console.log("[3] - Ler Arquivo");
        console.log("[0] - Sair");
        console.log("----------------------");
    }
    //opcoes provinientes do menu interativo juntamente dos metodos manipuladores do array
    private option() {
        var option = readline.questionInt("--> ");
        switch (option) {
            case 1:
                console.clear();
                do {
                    this.insertLine();
                    var resp = readline.questionInt("Deseja inserir mais linhas?\n[1] - Yes\n[2] - No\n-->");
                    if (resp == 1) {
                        console.clear();
                    }
                } while (resp == 1)
                break;
        
            case 2:
                console.clear();
                do {
                    this.removeLine();
                    var resp = readline.questionInt("Deseja deletar mais linhas?\n[1] - Yes\n[2] - No\n-->");
                    if (resp == 1) {
                        console.clear();
                    }
                } while (resp == 1)
                break;
            
            case 3:
                console.clear();
                this.openFile();
                break;
            case 0:
                break;
        }
    }
    //metodo complementar de abrir arquivo (array) para ler
    private openFile() {
        console.log("==================");
        console.log("Lendo o arquivo...");
        console.log("==================");
        this.arquivo.forEach((ler, pos)=> {
            console.log(`${pos+1} - ${ler}`);
        });
    }
    //inserir novas linhas no arquivo (array)
    private insertLine() {
        console.log("==================");
        console.log("Inserir linhas...");
        console.log("==================");
        console.log("---------------------------")
        this.arquivo.forEach((ler, pos) => { console.log(`${pos+1} - ${ler}`) });
        
        let inserir = readline.question("--> ");
        console.log("---------------------------")
        this.arquivo.push(inserir);

        return this.arquivo;
    }
    //remover linhas especificas
    private removeLine() {
        console.log("==========================================");
        console.log("Deseja remover qual linha do array abaixo?");
        console.log("==========================================");
        console.log("---------------------------")
        this.arquivo.forEach((ler, pos) => { console.log(`${pos+1} - ${ler}`) });
        console.log("---------------------------")
        let remover = readline.questionInt("--> ");
        let alterar = this.arquivo
        this.arquivo = alterar.slice(remover);
        
        return this.arquivo;
    }
}
