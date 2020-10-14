import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602679368800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name:'id',
                    type: 'integer',
                    unsigned: true, //NOT NULL
                    isPrimary: true, //Primary Key
                    isGenerated: true,
                    generationStrategy: 'increment', //auto_increment
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'interger',
                }
            ],
            foreignKeys: [{
                name: 'ImageOrphanage',
                columnNames: ['orphanage_id'],
                referencedTableName: 'orphanages',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
