import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import dotenv from 'dotenv';
import { CommonFields } from './commonFields';
import { User } from './user';

dotenv.config();

export interface IToken {
    id: number;
    accessToken: string;
    refreshToken: string;
    userId: number;
}

@Entity('tokens', { database: process.env.DB_NAME })
export class Token extends CommonFields implements IToken {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'varchar',
        width: 250,
    })
        accessToken: string;

    @Column({
        type: 'varchar',
        width: 250,
    })
        refreshToken: string;

    @Column({
        type: 'int',
    })
        userId: number;

    @ManyToOne(() => User, (user) => user.tokens)
    @JoinColumn({ name: 'userId' })
        user: User;
}
