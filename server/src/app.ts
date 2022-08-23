import express, { Request, Response } from 'express';

const app = express();
app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(5500, () => {
    console.log('Server has started on port 5500!!!');
});
