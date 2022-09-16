import { uuid } from 'uuidv4'

export class User {
    public readonly id: string; //readonly seta como depois que inserido não pode ser alterado

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) { //Omit, pega todas as propriedades do usuario (name, email e senha) menos o id.
        Object.assign(this, props);
        /*Object.assing é equivalente a:
        this.name = name;
        this.email = email;
        this.password = password;
        */
        if (!id) { //caso um id não for passado, ele será preenchido automaticamente pelo uuid, isso evita de atribuir tal responsabilidade ao banco
            this.id = uuid();
        }
    }
}