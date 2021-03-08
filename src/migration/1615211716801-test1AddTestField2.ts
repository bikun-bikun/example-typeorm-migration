import {MigrationInterface, QueryRunner} from "typeorm";

export class test1AddTestField21615211716801 implements MigrationInterface {
    name = 'test1AddTestField21615211716801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` ADD `test_field2` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `test1` DROP COLUMN `test_field2`");
    }

}
