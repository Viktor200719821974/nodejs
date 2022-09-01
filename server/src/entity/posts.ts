import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';
import dotenv from 'dotenv';
import { CommonFields } from './commonFields';
import { User } from './user';

dotenv.config();

export interface IPost {
    title: string;
    text: string;
    userId: number;
}

@Entity('posts', { database: process.env.DB_NAME })
export class Post extends CommonFields implements IPost {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        title: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        text: string;

    @Column({
        type: 'int',
    })
        userId: number;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'userId' })
        user: User;
}
