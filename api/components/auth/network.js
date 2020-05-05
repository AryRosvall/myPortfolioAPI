const express = require("express");
const passport = require("passport");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const router = express.Router();

const config = require("../../../config");

// Basic strategy
require("../../../auth/strategies/basic");

router.post("/token", auth);

async function auth(req, res, next) {
  passport.authenticate("basic", function (error, user) {
    try {

      if (error || !user) {
        next(boom.unauthorized());
      }

      req.login(user, { session: false }, async function (error) {
        if (error) {
          next(error);
        }

        const payload = { sub: user.username, email: user.email };
        const token = jwt.sign(payload, config.jwt.secret, {
          expiresIn: "15m"
        });
        console.log(token)
        return res.status(200).json({ access_token: token });
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
};

module.exports = router;