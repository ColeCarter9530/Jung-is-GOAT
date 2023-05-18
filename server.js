const express = require('express');
const routes = require('./routes');
const PORT = 3001;
const app = express();

app.use(routes);

app.listen(PORT, () => {
    console.log('this is my console log, there are many others like it, but this one is mine.');
});