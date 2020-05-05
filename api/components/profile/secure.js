const auth = require('../../../auth')

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    switch (action) {
      case 'check':
        const owner = req.body.id;
        auth.check.own(req, owner);
        next(next);
        break;
    }
  }

  return middleware;
}