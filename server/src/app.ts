import express, { Request, Response } from 'express';
// import { AppDataSource } from './data-source';

const app = express();
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});
// AppDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//         console.log('Data Source has been initialized!');
//     })
//     .catch((error) => console.log(error));

app.listen(1337, () => {
    // eslint-disable-next-line no-console
    console.log('Server has started on port 5500!!!');
});
