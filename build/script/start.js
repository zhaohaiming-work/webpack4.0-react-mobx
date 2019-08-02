const port = require('../../project.config').port
const portIsOccupied = require('../portUsed')
const logger = require('../logger')
const ip = require('ip')
const open = require('open')
logger.info('Starting server...')
portIsOccupied(port).then((p) => {
  require('../server').listen(p, () => {
    logger.success('Server is running at http://' + ip.address() + `:${p}`)
    open('http://' + ip.address() + `:${p}`)
  })
})
