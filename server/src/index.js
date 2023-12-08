const express = require('express');
const { Sequelize } = require('sequelize');

const config = require('./config/config.json');
const apiRouter = require('./routes/apiRouter');
const constants = require('./constants');

const app = express();
app.use(express.json());
app.use(express.static(__dirname +'/static'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT, HEAD, OPTIONS');
  next();
});
app.use('/api', apiRouter);
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
const sequelize = new Sequelize(
    config.development.username, 
    config.development.database, 
    config.development.password, 
    {
      host:'localhost',
      dialect: 'postgres',
      pool:{
          max:5,
          min:0,
          idle:10000
      },
});

const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
testDbConnection();
const PORT = constants.PORT || 5500;
const start = async() => {
  try {

  } catch (e) {
    console.log(e.message);
  }
    await sequelize.sync();
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server has started on port ${PORT}!!!`);
    });
}
start();
