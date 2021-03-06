import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Test1 {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test_field1: string;

    @Column()
    test_field2: string;

    @Column()
    add_col1: string;

    @Column()
    add_col2: string;

    @Column()
    add_col3: string;

    @Column()
    add_col4: string;

    @Column()
    add_col5: string;

    @Column()
    add_col6: string;
}
