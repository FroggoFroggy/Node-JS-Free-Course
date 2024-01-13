const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path')
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))

app.get("/", (req, res) => {
    res.send('Hello this is steakholder')

})
app.listen(port, () => {
    debug("Listening on port " + chalk.red(port));
})