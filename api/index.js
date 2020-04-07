const express = require('express');
const config = require('../config');
const profile = require('./components/profile/network');

//Initialize app
const app = express();

app.use(express.json());

app.use('/api/profile', profile);

app.listen(config.api.port, () => {
  console.log('Listening in port ', config.api.port);
});