'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const autoIncrement = require('mongoose-sequence')(mongoose);

const schema = new Schema({
	id: {
		index: true,
		type: Number,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	brand_id: {
		type: String,
		required: true
	},
	model_id: {
		type: String,
		required: true
	},
	license_plate: {
		type: String,
		required: true,
		index: true,
		unique: true
	}
});

schema.plugin(autoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Veiculo', schema);
