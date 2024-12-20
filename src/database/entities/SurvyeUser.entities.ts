import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Users } from "./User.entities";
import { Survey } from "./Survye.entities";
import { v4 as uuid } from "uuid";


@Entity('surveys_users')
export class SurveyUser{
    @PrimaryColumn({type: 'uuid'})
    readonly id: string
   
    @ManyToOne(()=> Users)
    @JoinColumn({name: "user_id"})
    user: Users;


     @Column()
    survey_id: string;

    @ManyToOne(()=> Survey)
    @JoinColumn({name: "survey_id"})
    survey: Survey;

    @Column({type: 'number'})
    valeu:number

    @CreateDateColumn({type:'timestamp'})
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid() 
        }
    }
}

  
