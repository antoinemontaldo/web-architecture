import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Status } from './status.model';



@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: Status,
        default: Status.CREATING,
    })
    status: Status;
}
