import express from 'express';
import dotenv from 'dotenv';

import { sequelize } from './db';
import { apiRouter } from './routes/apiRouter';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', apiRouter);

const PORT = Number(process.env.PORT);

const start = async() => {
    try {
        await sequelize.sync();
        app.listen(PORT || 5000, () => {
            // eslint-disable-next-line no-console
            console.log(`Server has started on port ${ PORT }!!!`);
        });
    } catch(e) {
        console.log(e);
    }
}
start();

