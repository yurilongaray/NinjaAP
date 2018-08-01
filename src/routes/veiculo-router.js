'use strict'

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/veiculo-controller');

router.get('/', 			 controller.get); //Fetch All
router.get('/:id', 			 controller.getById); //Fetch One
router.post('/', 			 controller.post); //Create
router.put('/edit/:id', 	 controller.put); //Edit
router.delete('/delete/:id', controller.delete); //Delete


//router.get('/:id', controller.getOneById);
//router.get('/:id', controller.getAllById);
module.exports = router;