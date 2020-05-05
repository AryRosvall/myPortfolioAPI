const jwt = require("jsonwebtoken");
const config = require('../config');
const response = require('../network/response');
const boom = require("@hapi/boom");
const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {

  console.log(token, secret)
  return jwt.verify(token, secret);
}

const check = {
  own: function (req, owner) {
    const decoded = decodeHeader(req);

    if (decoded.id !== owner) {
      boom.unauthorized();
    }
  },
  logged: function (req) {

    const decoded = decodeHeader(req);
    console.log(decoded)
  }
}

function getToken(auth) {

  if (!auth) {
    boom.unauthorized();
  }

  if (auth.indexOf('Bearer ') === -1) {
    return token;
  }

  let token = auth.replace('Bearer ', '');

  return (token);
}

function decodeHeader(req) {

  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);
  req.user = decoded;
  return decoded;
}

module.exports = {
  sign,
  check
}