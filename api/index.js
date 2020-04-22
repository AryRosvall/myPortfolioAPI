const express = require('express');
const config = require('../config');
const profile = require('./components/profile/network');
const experience = require('./components/experiences/network');
const language = require('./components/languages/network');
const academic = require('./components/academics/network');
const skills = require('./components/skills/network');
const projects = require('./components/projects/network');
const email = require('./components/mailing/network');

//Initialize app
const app = express();

app.use(express.json());

//Habilitate CORS only to the frontend URL
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.cors);
  next();
});

app.get('/', function (req, res) {
  res.redirect('/api/profile');
});

app.use('/api/profile', profile);
app.use('/api/experience', experience);
app.use('/api/language', language);
app.use('/api/academic', academic);
app.use('/api/skill', skills);
app.use('/api/project', projects);
app.use('/api/email', email);

app.listen(config.api.port, () => {
  console.log('Listening in port ', config.api.port);
});