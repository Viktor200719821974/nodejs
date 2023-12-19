const express = require('express');
require('dotenv').config();

const apiRouter = require('./routes/apiRouter');
const db = require('./models');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname +'/static'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT, HEAD, OPTIONS');
  next();
});
app.use("/api", apiRouter);
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
// const sequelize = new Sequelize(
//     config.development.username, 
//     config.development.database, 
//     config.development.password, 
//     {
//       host:'localhost',
//       dialect: 'postgres',
//       pool:{
//           max:5,
//           min:0,
//           idle:10000
//       },
// });

const testDbConnection = async () => {
    try {
      await db.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
testDbConnection();
const PORT = process.env.PORT || 5500;
// db.sequelize.sync({ force: false }).then(results => { 
//     app.listen(PORT, function () {    
//       console.log("server is successfully running!");  
//     });
//   });
const start = async() => {
  try {
    await db.sequelize.sync({ force: false });
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server has started on port ${PORT}!!!`);
    });
  } catch (e) {
    console.log(e.message, "error index.js");
  }
}
start();
