import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
  
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', unique: true})
    email: string

    @Column({type: 'text'})
    phone: string


    @Column({type: "timestamp"})
    created_at: Date

    @Column({type: "timestamp"})
    updated_at: Date

}


