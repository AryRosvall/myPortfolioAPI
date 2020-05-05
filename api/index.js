const profile = require('./components/profile/network');
const experience = require('./components/experiences/network');
const language = require('./components/languages/network');
const academic = require('./components/academics/network');
const skills = require('./components/skills/network');
const projects = require('./components/projects/network');
const email = require('./components/mailing/network');
const auth = require('./components/auth/network');


module.exports = (app) => {

  app.use('/api/profile', profile);
  app.use('/api/experience', experience);
  app.use('/api/language', language);
  app.use('/api/academic', academic);
  app.use('/api/skill', skills);
  app.use('/api/project', projects);
  app.use('/api/email', email);
  app.use('/api/auth', auth);

}