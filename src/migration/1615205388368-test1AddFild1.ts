import {MigrationInterface, QueryRunner} from "typeorm";

export class test1AddFild11615205388368 implements MigrationInterface {
    name = 'test1AddFild11615205388368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` ADD `add_col1` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` DROP COLUMN `add_col1`");
    }

}
