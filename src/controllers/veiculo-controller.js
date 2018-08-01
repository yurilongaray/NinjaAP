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
	Veiculo
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

/* Busca todos com o mesmo Id
exports.getAllById = (req, res, next) => {
	Veiculo
        .find({
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
*/
/* Busca pelo Id auto incremental do MongoDB
exports.getById = (req, res, next) => {
	Veiculo
		.findById(req.params.id)
		.then(data => {
			res.status(200)
				.send(data);
		})
		.catch(e => {
			res.status(400)
				.send(e);
		});
};
*/

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
	Veiculo
		.findByIdAndUpdate(req.params.id, {
			$set: {
				id_car: req.body.id,
				name: req.body.name,
				brand_id: req.body.brand_id,
				model_id: req.body.model_id,
				license_plate: req.body.license_plate
			}
		})
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
		.findOneAndRemove(req.params.id)
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

/*
exports.getBySlug = (req, res, next) => {
	Veiculo
        .findOne({
            slug: req.params.slug,
            active: true }, 'title description slug tags')
        .then(data => {
			res.status(200)
				.send(data);
        }).catch(e => {
			res.status(400)
				.send(e);
        });
};
*/