const express = require('express');
const apiRoute = require('./routes/api/api');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api', apiRoute);

app.listen(3036);
