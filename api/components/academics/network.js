const express = require('express');
const passport = require('passport');
const response = require('../../../network/response');
const Controller = require('./index');
const { academicIdSchema, createAcademicSchema, updateAcademicSchema } = require('./schema');
const validation = require('../../../utils/middleware/validationHandler');

require('../../../auth/strategies/jwt');

const router = express.Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', passport.authenticate('jwt', { session: false }), validation(createAcademicSchema), insert);
router.put('/:id', passport.authenticate('jwt', { session: false }), validation({ id: academicIdSchema }, "params"), validation(updateAcademicSchema), update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), remove);


function list(req, res, next) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200)
    })
    .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((academic) => {
      response.success(req, res, academic, 200)
    })
    .catch(next);
}

function insert(req, res, next) {
  Controller.insert(req.body)
    .then((academic) => {
      response.success(req, res, academic, 201)
    })
    .catch(next);
}

function update(req, res, next) {
  Controller.update(req.params.id, req.body)
    .then((academic) => {
      response.success(req, res, academic, 200)
    })
    .catch(next);
}

function remove(req, res, next) {
  Controller.remove(req.params.id)
    .then((academic) => {
      response.success(req, res, academic, 200)
    })
    .catch(next);
}

module.exports = router;
