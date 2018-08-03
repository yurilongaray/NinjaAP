'use strict'

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/veiculo-controller');

router.get('/', 	  	controller.get); //Fetch All
router.get('/:id', 	  	controller.getById); //Fetch One
router.post('/',     	controller.post); //Create
router.put('/:id',		controller.put); //Edit
router.delete('/:id', 	controller.delete); //Delete

module.exports = router;