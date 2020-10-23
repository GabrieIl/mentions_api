const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')


// Normalize port
function normalizePort(ref_port){
    const PORT = parseInt(ref_port, 10) // parse the str 'reference port' to int with base 10

    if(isNaN(PORT)) return ref_port
    if(PORT) return PORT

    return false
}


// Set port
const PORT = normalizePort(process.env.PORT || 3009) // select port set at .env if exists, else 3009
app.set('port', PORT)


// Error handler
function onError(error){
    if(error.syscall !== 'listen'){
        throw error
    }

    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT: 'Port ' + PORT

    switch(error.code){
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`)
            process.exit(1)
        
        case 'EADDRINUSE':
            console.log(`${bind} is already in use`)
            process.exit(1)
        
        default:
            throw error
    }
}


// Listener handler
function onListening(){
    const addr = server.address()
    const bind = typeof addr == 'string' ? 'pipe ' + addr: 'ṕort ' + addr.PORT
    
    debug(`Listening on ${bind}`)
}


// Server configurations
const server = http.createServer(app)
server.listen(PORT)
server.on('error', onError)
server.on('listening', onListening)
console.log(`API is alive on ${PORT}`)
