import { Repository } from "typeorm";
import { Users } from "../database/entities/User.entities";
import { AppDataSource } from "../database/datasource";


export class UserRepository{
    //só posso usar metodos criados aqui
    //private repository: Repository<Users>; // se eu quiser ser mais seguro porem só posso usar metodos criados aqui como o findByEmail
    repository: Repository<Users>;    //acesso a tudo que Repository tem
 
    constructor(){
        this.repository = AppDataSource.getRepository(Users);
    }

    async findByEmail(email:string){
        const emailExists = await this.repository.findOne({where:{email}})

        return emailExists
    }
}

/**
 * criamos repositories personalizados e especializados por segurança
 * e para que possamos criar metodos e funcões propria
 */

