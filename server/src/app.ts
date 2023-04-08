import express from 'express';
import fileUpload from 'express-fileupload';
import path from 'path';

import { config } from './config';
import { sequelize } from './db';
import { apiRouter } from './routes/apiRouter';

const app = express();

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:5500');
    // res.header('Access-Control-Allow-Headers', 'http://localhost:5500');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT, HEAD, OPTIONS');
    next();
});
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
start().then((r) => r);
