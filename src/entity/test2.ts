import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Test2 {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test_field2: string;

    @Column()
    migration_file3: string;

    @Column()
    migration_file4: string;
}
