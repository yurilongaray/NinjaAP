'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const schema = new Schema({
	id: {
		type: Number,
		required: true
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
		unique: [true, 'License Plate already exists']
	}
});

module.exports = mongoose.model('Veiculo', schema);

/*

    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },

*/