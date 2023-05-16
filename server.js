//import and format express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//import the required files
const sequelize = require('./config/connection');
const routes = require('./routes');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//starts the server and syncs it up to sequelize
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});