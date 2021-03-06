import {MigrationInterface, QueryRunner} from "typeorm";

export class test11615032243970 implements MigrationInterface {
    name = 'test11615032243970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `test1` (`id` int NOT NULL AUTO_INCREMENT, `test_field1` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `test1`");
    }

}
