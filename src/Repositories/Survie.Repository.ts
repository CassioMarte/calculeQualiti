import { Repository } from "typeorm";
import { Survey } from "../database/entities/Survye.entities";
import { AppDataSource } from "../database/datasource";


export class SurvyeRepository{
    repository:Repository<Survey>

    constructor(){
        this.repository = AppDataSource.getRepository(Survey)
    }
}