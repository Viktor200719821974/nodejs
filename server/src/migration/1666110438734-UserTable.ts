import { MigrationInterface, QueryRunner } from "typeorm"

export class UserTable1666110438734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS Users (
            id INT PRIMARY KEY AUTO_INCREMENT,
            firstName VARCHAR(250) NOT NULL,
            lastName VARCHAR(250) NOT NULL,
            age INT CHECK (age > 0),
            activateToken VARCHAR(250) DEFAULT('noActive'),
            phone VARCHAR(250) NOT NULL UNIQUE,
            email VARCHAR(250) NOT NULL UNIQUE,
            password VARCHAR(250) NOT NULL,
            is_active BOOLEAN DEFAULT(false),
            is_staff BOOLEAN DEFAULT(false),
            is_superuser BOOLEAN DEFAULT(false),
            createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
            deletedAt TIMESTAMP
        )
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Users
        `);
    }

}
