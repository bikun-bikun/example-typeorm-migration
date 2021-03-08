import {MigrationInterface, QueryRunner} from "typeorm";

export class Test2AddCol11615216320663 implements MigrationInterface {
    name = 'Test2AddCol11615216320663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test2` ADD `migration_file1` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test2` DROP COLUMN `migration_file1`");
    }

}
