import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1AddCol561615215902182 implements MigrationInterface {
    name = 'Test1AddCol561615215902182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` ADD `add_col5` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `test1` ADD `add_col6` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` DROP COLUMN `add_col6`");
        await queryRunner.query("ALTER TABLE `test1` DROP COLUMN `add_col5`");
    }

}
