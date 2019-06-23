const path = require('path')
const webpack = require('webpack')
const { env, basePath, externals, main,
  publicPath, globals, outDir, srcDir,
  sourcemaps, vendors, } = require('../project.config')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const inProject = path.resolve.bind(path, basePath)
const inProjectSrc = (file) => inProject(srcDir, file)
// 各类非 js 直接引用（import require）静态资源，依赖相对路径加载问题，都可以用 ~ 语法完美解决；
const resolve = dir => path.join(__dirname, '..', dir)
const __DEV__ = env === 'development'
const __TEST__ = env === 'test'
const __PROD__ = env === 'production'

const config = {
  mode: env,
  entry: {
    normalize: [
      inProjectSrc('normalize'),
    ],
    main: [
      inProjectSrc(main),
    ],
  },
  devtool: sourcemaps ? 'cheap-module-eval-source-map' : false,
  output: {
    path: inProject(outDir),
    filename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    chunkFilename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    publicPath,
  },
  resolve: {
    modules: [
      inProject(srcDir),
      'node_modules',
    ],
    extensions: ['*', '.web.tsx', '.web.ts', '.web.js', '.js', '.jsx', '.json', '.scss', '.jpg', '.png'],
    alias: {
      '@': resolve(srcDir),
      pages: resolve(`${srcDir}/routes`),
      layout: resolve(`${srcDir}/pageLayout`),
      components: resolve(`${srcDir}/components`),
      mobx: path.resolve(__dirname, '../node_modules/mobx/lib/mobx.es6.js'),
      store:resolve(`${srcDir}/mobx/index`)
    }
  },
  externals,
  module: {
    rules: []
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env) },
      __DEV__,
      __TEST__,
      __PROD__,
      ...globals
    })
  ]
}
// js
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-export-default-from',
          ["@babel/plugin-proposal-decorators", { 'legacy': true }],
          ['@babel/plugin-proposal-class-properties', {
            "loose": true
          }],
        ],
        presets: [
          '@babel/preset-react',
          '@babel/preset-env',
        ]
      }
    },
    // {
    //   loader: 'eslint-loader',
    //   options: {
    //     fix: true,
    //     quiet: true,
    //     formatter: require('eslint/lib/formatters/stylish')
    //   },
    // }
  ]
})
// css
config.module.rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: [
    // 只能在production中运用MiniCssExtractPlugin.loader
    {
      loader: __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
    },
    'css-loader',
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
        sourceMap: sourcemaps,
        includePaths: [
          inProjectSrc('styles'),
        ],
      },
    }
  ]
})

config.plugins.push(new MiniCssExtractPlugin({
  filename: __DEV__ ? 'css/[name].css' : 'css/[name].[contenthash].css',
  chunkFilename: __DEV__ ? 'css/[id].css' : 'css/[id].[hash].css'
}))

// html
const HtmlWebpackPlugin = require('html-webpack-plugin')
config.plugins.push(new HtmlWebpackPlugin({
  template: inProjectSrc('index.html'),
  inject: true,
  minify: {
    collapseWhitespace: true,
  },
}))
// images
config.module.rules.push({
  test: /\.(png|jpg|gif)$/,
  loader: 'url-loader',
  options: {
    limit: 8192,
    name: 'images/[name]-[hash].[ext]'
  },
})
  // font and svg
  ;[
    ['woff', 'application/font-woff'],
    ['woff2', 'application/font-woff2'],
    ['otf', 'font/opentype'],
    ['ttf', 'application/octet-stream'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['svg', 'image/svg+xml'],
  ].forEach((font) => {
    const extension = font[0]
    const mimetype = font[1]
    config.module.rules.push({
      test: new RegExp(`\\.${extension}$`),
      loader: 'url-loader',
      options: {
        name: 'fonts/[name]-[hash].[ext]',
        limit: 10000,
        mimetype,
      },
    })
  })
// server
if (__DEV__) {
  config.entry.main.push(
    `webpack-hot-middleware/client.js?path=${config.output.publicPath}__webpack_hmr`
  )
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  )
}
// Bundle Splitting
config.optimization = {
  splitChunks: {
    cacheGroups: {
      // 抽离第三方插件
      vendors: {
        chunks: 'all',
        test: /[\\/]node_modules[\\/]/,
        priority: 100,
        name: 'vendors',
      },
      // 其他同步加载公共包
      commons: {
        chunks: 'all',
        minChunks: 2,
        name: 'commons',
        priority: 80,
      }
    }
  }
}
if (__PROD__) {
  // 生产环境压缩js和css 覆盖默认压缩功能
  config.optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: sourcemaps
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        context: __dirname
      }
    }),
  )
}
module.exports = config
