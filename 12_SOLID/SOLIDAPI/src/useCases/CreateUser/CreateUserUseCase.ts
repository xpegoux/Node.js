import { User } from "../../entities/Users";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
    constructor(
       private usersRepository: IUsersRepository, //dependicy inversion
       private mailProvider: IMailProvider,
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exist.');
        }

        const user = new User(data);

        await this.usersRepository.save(user);
        
        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do Meu APP',
                email: 'equipe@meuapp.com',
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })
    }
}
/*
Esta classe CreateUserUseCase tem uma única responsabilidade que é a criação de usuário (SINGLE RESPONSABILITY).
Ela não tem responsabilidade de saber como esse usuário será salvo, em json, banco, api etc..
*/