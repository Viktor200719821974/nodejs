import express, { Request, Response } from 'express';

const app = express();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(5500, () => {
    // eslint-disable-next-line no-console
    console.log('Server has started on port 5500!!!');
});
