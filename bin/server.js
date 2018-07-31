const app 	= require('../src/app');
const http  = require('http');
const debug = require('debug')('modestr:server');

//Porta
const port = normalizePort(process.env.PORT || '8000')