//força o js a ser mais criterioso (notifica caso exista falta de comandos)
'use strict'

//Chamada de pacotes
const express 	 = require('express');
const bodyParser = require('body-parser');
const mongoose 	 = require('mongoose');
const cors 		 = require('cors');

//Define app por meio do express
const app 	 = express();
const router = express.Router();

//Usado antes de todas as definiçõe de rotas (CORS)
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(cors({origin: 'http://localhost:8080'}));

//Conecta com BD (MongoDB)
mongoose.connect('mongodb://yurilongaray:a123456@ds159641.mlab.com:59641/ninjaapi', { useNewUrlParser: true })

//Carrega Models
const Veiculo = require('./models/veiculo');

//Carrega Rotas
const veiculoRoute  = require('./routes/veiculo-router');

//Tornando o bodyParser em um middleware entre as requisições para transformar em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

//Chamada das Funções
app.use('/vehicles', veiculoRoute);

//Exporta o app
module.exports = app;