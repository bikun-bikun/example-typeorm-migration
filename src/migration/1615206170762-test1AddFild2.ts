import {MigrationInterface, QueryRunner} from "typeorm";

export class test1AddFild21615206170762 implements MigrationInterface {
    name = 'test1AddFild21615206170762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` ADD `add_col2` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` DROP COLUMN `add_col2`");
    }

}
