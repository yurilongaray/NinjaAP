//força o js a ser mais criterioso (notifica caso exista falta de comandos)
'use strict'

//Chamada de pacotes
const express 	 = require('express');
const bodyParser = require('body-parser');
const mongoose 	 = require('mongoose');

//Define app por meio do express
const app 	 = express();
const router = express.Router();

//Conecta com BD (MongoDB)
mongoose.connect('', { useNewUrlParser: true })

//Carrega Models
const Veiculo = require('.models/veiculo');

//Carrega Rotas
const veiculoRoute = require('.models/veiculo-route');

//Tornando o bodyParser em um middleware entre as requisições para transformar em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

//Chamada das Funções
app.use('/veiculos', veiculoRoute);

//Exportação do app
module.exports = app;