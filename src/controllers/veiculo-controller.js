'use strict'

const mongoose = require('mongoose');

//Instância do Model
const Veiculo = mongoose.model('Veiculo');

//Busca todos veículos
exports.get = (req, res, next) => {
	Veiculo
		.find()
		.then( data => {
			res.status(200)
				.send(data);
		})
		.catch(e => {
			res.status(400)
				.send(e);
		});
};

//Busca por id
exports.getById = (req, res, next) => {
	return Veiculo
        .findOne({
			id: req.params.id
		})
        .then(data => {
			res.status(200)
				.send(data);
		})
		.catch(e => {
			res.status(400)
				.send(e);
        });
};

//Cria o veiculo
exports.post = (req, res, next) => {
	const veiculo = new Veiculo(req.body);

	veiculo
		.save()
		.then(x => {
			res.status(201)
				.send({
					message: 'Vehicle successfully registered!'
				})
		})
		.catch(e => {
			if(e.code === 11000 && e.name === 'MongoError') {
				res.status(400)
				.send({
					message: 'License plate already exists!'
					//details: e.message
				});
			} else {
				res.status(400)
					.send({
						message: 'Registered failed!'
						//details: e.message
					});
			}
		});
};

//Atualiza o veiculo
exports.put = (req, res, next) => {
	const newvalues = {
		  $set: {
			name: req.body.name,
			brand_id: req.body.brand_id,
			model_id: req.body.model_id,
			license_plate: req.body.license_plate
		}
	};

	return Veiculo
		.updateOne({id: req.params.id}, newvalues)
		.then(x => {
			res.status(201)
				.send({
					message: 'Vehicle updated!'
				})
		})
		.catch(e => {
			res.status(400)
				.send({
					message: 'Fail on update!'
					//details: e
				})
		})
};

//Deleta o veiculo
exports.delete = (req, res, next) => {
	Veiculo
		.deleteOne({
			id: req.params.id
		})
		.then(x => {
			res.status(400)
			.send({
				message: 'Vehicle successfully deleted!'
			});
		})
		.catch(e => {
			res.status(400)
				.send({
					message: 'Fail on delete!'
					//details: e
				});
		});
};
