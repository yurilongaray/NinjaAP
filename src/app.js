//força o js a ser mais criterioso (notifica caso exista falta de comandos)
'use strict'

//Chamada de pacotes
const express 	 = require('express');
const bodyParser = require('body-parser');
const mongoose 	 = require('mongoose');

//Define app por meio do express
const app 	 = express();
const router = express.Router();

var cors = require('cors');

//Usado antes de todas as definições de rota
app.use(cors({origin: 'http://127.0.0.1:8080'}));

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