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

exports.getById = (req, res, next) => {
	return Veiculo
        .findOne({
			id: req.params.id
		})
        .then(data => {
			res.status(200)
				.send(data);
        }).catch(e => {
			res.status(400)
				.send(e);
        });
};

exports.post = (req, res, next) => {
	const veiculo = new Veiculo(req.body);

	veiculo
		.save()
		.then(x => {
			res.status(201)
				.send({
					message: 'Veiculo cadastrado com sucesso'
				})
		})
		.catch(e => {
			res.status(400)
				.send({
					message: 'Falha ao cadastrar',
					data: e
				});
		});
};

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
		.updateOne({ id: req.params.id }, newvalues)
		.then(x => {
			res.status(201)
				.send({
					message: 'Veiculo atualizado com sucesso'
				})
		})
		.catch(e => {
			res.status(400)
				.send({
					message: 'Falha ao atualizar',
					data: e
				})
		})
};

exports.delete = (req, res, next) => {
	Veiculo
		.deleteOne({
			id: req.params.id
		})
		.then(x => {
			res.status(400)
			.send({
				message: 'Excluído com sucesso!'
			});
		})
		.catch(e => {
			res.status(400)
				.send({
					message: 'Falha ao excluir',
					data: e
				});
		});
};
