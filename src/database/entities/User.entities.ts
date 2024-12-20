import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity('users')
export class Users {

    // @PrimaryColumn({ type: 'uuid', default: () => 'uuid_generate_v4()' })  //se for postgris
    @PrimaryColumn({ type: 'uuid' })
    readonly id: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', unique: true, length: 250 })
    email: string;

    @Column({ type: 'varchar' })
    phone: string;

    @Column({ type: "timestamp" })
    created_at: Date;

    @Column({ type: "timestamp" })
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}



