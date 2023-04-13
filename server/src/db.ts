import { Sequelize } from 'sequelize';

import { config } from './config';

export const sequelize = new Sequelize(
    config.POSTGRES_DB!,
    config.POSTGRES_USER!,
    config.POSTGRES_PASSWORD,
    {
        dialect: 'postgres',
        host: config.POSTGRES_HOST,
        port: Number(config.POSTGRES_PORT),
    },
);
