const express = require('express');
const path = require('path');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
// we need this so that it binds to the nearest AVAILABLE port number
const PORT = process.env.PORT || 3001;
const app = express();

// to access the public folder
app.use(express.static(path.join(__dirname, '/public')));

// to use Handlebars (plus line 4)
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// const models = require("./models")

// this is needed to do post requests
app.use(express.json());
app.use(express.urlencoded( { extended: true}));

app.use(controllers);

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log('THIS IS MY CONSOLE LOG, THERE ARE MANY LIKE IT, BUT THIS ONE IS MINE.');
    });
});
