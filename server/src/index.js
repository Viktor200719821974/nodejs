const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = 5500;
const sequelize = new Sequelize('postgres', 'postgres', 'root', {
    host:'localhost',
    dialect: 'postgres',
    pool:{
        max:5,
        min:0,
        idle:10000
    },
})
const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
testDbConnection();
const start = async() => {
    await sequelize.sync();
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server has started on port ${PORT}!!!`);
    });
}
start();
