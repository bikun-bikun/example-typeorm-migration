import {MigrationInterface, QueryRunner} from "typeorm";

export class test21615042888886 implements MigrationInterface {
    name = 'test21615042888886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `test2` (`id` int NOT NULL AUTO_INCREMENT, `test_field2` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `test2`");
    }

}
