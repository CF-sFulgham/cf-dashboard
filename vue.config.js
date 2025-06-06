const aliases = require('./config/aliases.config')
const publicPath = process.env.VUE_APP_NODE_ENV !== 'production' ? '' : './'

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  // https://github.com/neutrinyarojs/webpack-chain/tree/v4#getting-started
  chainWebpack(config) {
    // Set Webpack mode to the environment setting
    config.mode(process.env.VUE_APP_NODE_ENV)

    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', process.env.VUE_APP_TITLE)

    // Set up all the aliases we use in our app.
    // https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias.clear().merge(aliases.webpack)

    // Don't allow importing .vue files without the extension, as
    // it's necessary for some Vetur autocompletions.
    // X
    config.resolve.extensions.delete('.vue')

    // Enable performance hints for production builds with large files.
    // CI should watch the output to prevent deployments to the server.
    // Enable performance hints for all other environments.
    // This will log warnings for for files over 250kb.
    // config.performance.hints(
    //   process.env.NODE_ENV !== 'production' &&
    //     !process.env.VUE_APP_TEST &&
    //     process.env.NODE_ENV !== 'production'
    //     ? 'warning'
    //     : 'error'
    //     : 'false'
    // )
  },
  // Change the path to public based on environment. This allows
  // urls to be redirected to homepage instead of 404s.
  // todo: Path match and direct to correct page
  publicPath: publicPath,

  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },

  // Configure Webpack's dev server.R33
  // https://cli.vuejs.org/guide/cli-service.html
  // https://github.com/chrisvfritz/vue-enterprise-boilerplate/issues/25
  // https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_configure_webpack_proxy.html
  /*
  devServer: {
    disableHostCheck: true,
    https: true,
    host: 'local.admin.primerica.com',
    hotOnly: false,
  },
  */

  transpileDependencies: ['bootstrap/js/src', '/assets/js/slim.js'],
}
