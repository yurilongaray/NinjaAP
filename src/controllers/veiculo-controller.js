'use strict'

const mongoose = require('mongoose');

//Instância do Model
const Veiculo = mongoose.model('Veiculo');

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
	const id = req.params.id;

	res.status(200)
		.send({
			id: id,
			item: req.body
		});
};

exports.delete = (req, res, next) => {
	res.status(200)
		.send(req.body);
};