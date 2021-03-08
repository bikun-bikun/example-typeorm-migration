import {MigrationInterface, QueryRunner} from "typeorm";

export class Test2AddCol41615216561657 implements MigrationInterface {
    name = 'Test2AddCol41615216561657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test2` ADD `migration_file4` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test2` DROP COLUMN `migration_file4`");
    }

}
