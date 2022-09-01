import 'reflect-metadata';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/user';
// import { AppDataSource } from './data-source';

dotenv.config();

const app = express();
app.use(express.json());
app.get('/users', async (req: Request, res: Response) => {
    const users = await getManager().getRepository(User).find({ relations: ['posts'] });
    // const users = await getManager().getRepository(User)
    //     .createQueryBuilder('user')
    //     .where('user.firstName = "Ivan"')
    //     .getOne();
    res.json(users);
});
app.post('/users', async (req: Request, res: Response) => {
    const createdUser = await getManager().getRepository(User).save(req.body);
    res.json(createdUser);
});
app.patch('/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { password, email } = req.body;
    const changeUser = await getManager().getRepository(User)
        .update({ id: Number(id) }, { password, email });
    res.json(changeUser);
});
app.delete('/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await getManager().getRepository(User).softDelete({ id: Number(id) });
    res.json('Ok');
});
// AppDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//         console.log('Data Source has been initialized!');
//     })
//     .catch((error) => console.log(error));
const { PORT } = process.env;
app.listen(PORT || 5000, async () => {
    try {
        const connection = await createConnection();
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
