const express = require('express');
const config = require('./config');
const Routes = require('./api')

//const cors = require('cors');

//Initialize app
const app = express();

app.use(express.json());

//Habilitate CORS only to the frontend URL
//app.use(cors({ origin: true, credentials: true }));

Routes(app);

app.get('/', (req, res, next) => {
  try {
    res.status(200)
      .send({
        "api": "aryrosvall.com",
        "version": "1.0.0"
      });

  } catch (error) {
    next(error);
  }
});

app.listen(config.api.port, () => {
  console.log('Listening in port ', config.api.port);
});