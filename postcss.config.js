// const pxtorem = require('postcss-pxtorem') // px转rem
const postcssNormalize = require('postcss-normalize')
module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      overrideBrowserslist: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
    postcssNormalize()
  ]
}
