import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("surveys")
export class Survey {
    @PrimaryColumn({ type: 'uuid' })
    readonly id: string

    @Column({ type: 'varchar', length: 150 }) //varchar texto com limite de caracteres
    title: string

    @Column({type:'text'}) //text texto sem limite de caracteres
    description: string

    @CreateDateColumn({type:"datetime"})
    created_at: Date

    // @UpdateDateColumn({ type: "timestamp"})
    // updated_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

