const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');

const app = express();
const port = 9000;

app.use(helmet());
app.use(morgan('combined'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log('Connected on port ' + port));