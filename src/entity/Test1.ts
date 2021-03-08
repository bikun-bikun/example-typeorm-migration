import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Test1 {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test_field1: string;

    @Column()
    add_col2: string;
}
