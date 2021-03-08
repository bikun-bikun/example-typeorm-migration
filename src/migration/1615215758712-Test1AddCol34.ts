import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1AddCol341615215758712 implements MigrationInterface {
    name = 'Test1AddCol341615215758712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` ADD `add_col3` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `test1` ADD `add_col4` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` DROP COLUMN `add_col4`");
        await queryRunner.query("ALTER TABLE `test1` DROP COLUMN `add_col3`");
    }

}
