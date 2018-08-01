'use strict' 

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/veiculo-controller');

//(req, res, next) = requisição, resposta e próximo
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;