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
		type: Number,
		required: true
	},
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true, 
        unique: true  
    },
	model_id: {
		type: Number,
		required: true
	},
	license_plate: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Veiculo', schema);