const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', remove);


function list(req, res, next) {
  Controller.list()
  .then((list) => {
    response.success(req, res, list, 200)
  })
  .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
  .then((language) => {
    response.success(req, res, language, 200)
  })
  .catch(next);
}

function insert(req, res, next) {
  Controller.insert(req.body)
  .then((language) => {
    response.success(req, res, language, 201)
  })
  .catch(next);
}

function update(req, res, next) {
  Controller.update(req.params.id, req.body)
  .then((language) => {
    response.success(req, res, language, 200)
  })
  .catch(next);
}

function remove(req, res, next) {
  Controller.remove(req.params.id)
  .then((language) => {
    response.success(req, res, language, 200)
  })
  .catch(next);
}

module.exports = router;
