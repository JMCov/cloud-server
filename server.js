'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3004;

app.get('/', (req, res, next) => {
  res.status(200).send('Hello from hell!');
});

app.listen(PORT, () => {
  console.log('Listening up in here on ' + PORT);
});