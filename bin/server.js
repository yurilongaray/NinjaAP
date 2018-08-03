const app 	= require('../src/app');
const http  = require('http');
const debug = require('debug')('modestr:server');

//Função de verificação da porta
function normalizePort(val) {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr == 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

//Porta
const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

//Servidor
const server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);
console.log("Rodando na porta", port);