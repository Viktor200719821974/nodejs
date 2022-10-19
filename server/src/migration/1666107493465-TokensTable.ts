import { MigrationInterface, QueryRunner } from "typeorm"

export class TokensTable1666107493465 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS Tokens (
            id INT PRIMARY KEY AUTO_INCREMENT,
            accessToken VARCHAR(250) NOT NULL,
            refreshToken VARCHAR(250) NOT NULL,
            userId INT NOT NULL
        )
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Tokens
        `);
    }

}
