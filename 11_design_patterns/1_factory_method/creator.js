import {Produto} from "./interface.js"

//a funcao recebe os parametros e retorna um novo objeto, e é exportado para o index.
    

//creator factory
function createProduto(ram, hdd, cpu, type){
    return new Produto(ram, hdd, cpu, type)
}

//factory de computador concreto
export class Computador extends createProduto {
    constructor(ram, hdd, cpu) {
        let type = true;
        super(ram, hdd, cpu, type);
    }
}

//factory de server concreto
export class Server extends createProduto {
    constructor(ram, hdd, cpu) {
        let type = false;
        super(ram, hdd, cpu, type);
    }
}

