import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import dotenv from 'dotenv';
import { User } from './user';

dotenv.config();

export interface IToken {
    id: number;
    accessToken: string;
    refreshToken: string;
    userId: number;
}

@Entity('Tokens', { database: process.env.DB_NAME })
export class Token implements IToken {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        accessToken: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        refreshToken: string;

    @Column({
        type: 'int',
        nullable: false,
    })
        userId: number;

    @ManyToOne(() => User, (user) => user.tokens)
    @JoinColumn({ name: 'userId' })
        user: User;
}
