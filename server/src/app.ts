import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { apiRouter } from './routes/apiRouter';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiRouter);

const { PORT } = process.env;
app.listen(PORT || 5000, async () => {
    try {
        const connection = await createConnection({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: ['src/entity/**/*.ts'],
            subscribers: ['src/subscriber/**/*.ts'],
            migrations: ['src/migrations/**/*.ts'],
            cli: {
                migrationsDir: 'src/migrations',
            },
        });
        if (connection) {
            // eslint-disable-next-line no-console
            console.log('Database connected');
        }
        // eslint-disable-next-line no-console
        console.log(`Server has started on port ${PORT}!!!`);
    } catch (e) {
        if (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }
});
