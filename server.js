const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const PORT = 3001;
const app = express();

app.use(controllers);

sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log('this is my console log, there are many others like it, but this one is mine.');
    });
});
