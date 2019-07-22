const port = require('../../project.config').port
const logger = require('../logger')
const ip = require('ip')
logger.info('Starting server...')
require('../server').listen(port, () => {
  logger.success('Server is running at http://' + ip.address() + `:${port}`)
})
