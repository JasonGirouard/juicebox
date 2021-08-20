
const { client } = require('./db');
client.connect();
const express = require('express');
const server = express();
const apiRouter = require('./api');

server.use('/api', apiRouter);

const PORT = 3000;
server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
  const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));



});




server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

