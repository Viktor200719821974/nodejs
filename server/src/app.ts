import express from 'express';
import cors from 'cors';

import { config } from './config';
import { sequelize } from './db';
import { apiRouter } from './routes/apiRouter';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);

const PORT = Number(config.PORT);
const start = async () => {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Server has started on port ${PORT}!!!`);
        });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
};
start();
