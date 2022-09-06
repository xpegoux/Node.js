class Animal {
    #peso;
    #idade;
    #membros;
    constructor() {
        this.#peso;
        this.#idade;
        this.#membros;
    }

    locomover(){};
    alimentar(){};
    emitirSom(){};
}

class Reptil extends Animal {
    #corEscama;
    constructor(){
        super();
        this.#corEscama;
    }
    
}