const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = 5500;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server has started on port ${PORT}!!!`);
});
