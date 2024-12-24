import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurvye1735020764523 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'surveys',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                       name:'title',
                       type:'varchar',
                       length: '100'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name:'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                      // {
                    //     name: 'updated_at',
                    //     type: 'timestamp',
                    //     default: 'now()',      sqlite não aceita 
                    // }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable('surveys')
    }

}
