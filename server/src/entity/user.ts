import {
    Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import dotenv from 'dotenv';
import { CommonFields } from './commonFields';
import { Token } from './token';

dotenv.config();

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age?: number;
    phone: string;
    email: string;
    password: string;
    activateToken?: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
}
@Entity('Users', { database: process.env.DB_NAME })
export class User extends CommonFields implements IUser {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        firstName: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        lastName: string;

    @Column({
        type: 'int',
    })
        age?: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
        email: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        password: string;

    @Column({
        type: 'varchar',
        width: 250,
        default: 'noActive',
        select: false,
    })
        activateToken?: string;

    @Column({
        type: 'boolean',
        default: false,
    })
        is_active: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
        is_staff: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
        is_superuser: boolean;

    @OneToMany(() => Token, (token) => token.user)
        tokens: Token[];
}
