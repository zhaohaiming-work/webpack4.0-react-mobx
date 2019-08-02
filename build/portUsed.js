const net = require('net');
const logger = require('./logger')

function portIsOccupied(port) {
  const server = net.createServer().listen(port);
  return new Promise((resolve, reject) => {
    server.on('listening', () => {
      server.close()
      resolve(port)
    });
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(portIsOccupied(+port + 1)) //端口号+1
        logger.warn(`this port ${port} is used. try another.`)
      } else {
        reject(err)
      }
    })
  })
}

module.exports = portIsOccupied
