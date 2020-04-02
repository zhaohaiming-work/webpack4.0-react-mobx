const ip = require('ip')
const NODE_ENV = process.env.NODE_ENV || 'development'
const port = '6787'
const environment = process.argv[2]
const hostConfig = {
  test:'http://test-admin.caicchina.com',
  dev:'http://dev-admin.caicchina.com',
  prod:'http://admin.caicchina.com'
}
let proxyHost = ''
switch (environment) {
  case 'prod':
  case 'test':
  case 'dev':
    proxyHost = hostConfig[environment]
    break
  default:
    proxyHost = hostConfig.test
}
module.exports = {
  ip,
  port,
  env: NODE_ENV,
  basePath: __dirname,
  srcDir: 'src',
  main: 'main',
  outDir: 'dist',
  publicPath: NODE_ENV === 'development' ? `http://${ip.address()}:${port}/` : './',
  sourcemaps:NODE_ENV === 'development',
  externals: {},
  globals: {},
  verbose: false,
  vendors: [
    'react',
    'react-dom',
    'react-router-dom'
  ],
  proxyHost,
  // 转发的请求地址
  proxyApiPathArr: [
    'api',
    'mgt'
  ]
}
