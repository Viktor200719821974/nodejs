import {
    Column, CreateDateColumn, DeleteDateColumn,
} from 'typeorm';

export interface ICommonFields {
    createdAt: string;
    deletedAt?: string;
}
export class CommonFields implements ICommonFields {
    @Column({
        nullable: false,
        default: Date.now(),
    })
    @CreateDateColumn({ type: 'timestamp' })
        createdAt: string;

    @Column()
    @DeleteDateColumn({ type: 'timestamp' })
        deletedAt?: string;
}
