

const {
  override,
  addLessLoader,
  fixBabelImports,
  addDecoratorsLegacy,
  addWebpackAlias,
  addWebpackModuleRule
} = require('customize-cra')


const path = require('path')
const resolve = (src) => path.resolve(__dirname, '.', src)
// eslint-disable-next-line no-unused-vars
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// eslint-disable-next-line no-unused-vars
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const plugins = []




plugins.push(new BundleAnalyzerPlugin())
// 开发阶段 plugin 包
if (isDev) {
  plugins.push(new HardSourceWebpackPlugin())
} else {
  // plugins.push(compressPlugin);
  // plugins.push(new BundleAnalyzerPlugin());
  // 生产阶段
  // plugins.push(new BundleAnalyzerPlugin())
}


const customize = () => config => {
  console.log(config)

  // 生产阶段
  if (!isDev) {
    // map
    config.devtool = false

    // dropConsole
    if (config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions.compress.drop_console = true
          minimizer.options.extractComments = false
        }
      })
    }
  }






  config.optimization.splitChunks = {
    chunks: 'all',
    cacheGroups: {

      // 其次: 打包业务中公共代码
      common: {
        name: "test-components",
        chunks: "all",
        test: resolve('src/components'),
        minChunks: 2, //  minimum common number
        priority: 10,
        reuseExistingChunk: true
      },

      // 首先: 打包node_modules中的文件
      vender: {
        name: "test-vendor",
        test: /[\\/]node_modules[\\/]/,
        chunks: "all",
        priority: 10
      }

    }
  }


  // config.optimization.splitChunks = {
  //   chunks: "all",          //async异步代码分割 initial同步代码分割 all同步异步分割都开启
  //   minSize: 30000,         //字节 引入的文件大于30kb才进行分割
  //   //maxSize: 50000,         //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
  //   minChunks: 1,           //模块至少使用次数
  //   maxAsyncRequests: 5,    //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
  //   maxInitialRequests: 3,  //首页加载的时候引入的文件最多3个
  //   automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
  //   name: false,                  //缓存组里面的filename生效，覆盖默认命名
  //   cacheGroups: { //缓存组，将所有加载模块放在缓存里面一起分割打包
  //     vendors: {  //自定义打包模块
  //       test: /[\\/]node_modules[\\/]/,
  //       priority: -10, //优先级，先打包到哪个组里面，值越大，优先级越高
  //       filename: 'vendors.js',
  //     },
  //     default: { //默认打包模块
  //       priority: -20,
  //       reuseExistingChunk: true, //模块嵌套引入时，判断是否复用已经被打包的模块
  //       filename: 'common.js'
  //     }
  //   }
  // }


  // style-resource-loader
  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf

  loaders[loaders.length - 3].use.push({
    loader: 'style-resources-loader',
    options: {
      patterns:
        [
          resolve('src/styles/common.less'),
        ],
      injector: 'append'
    }
  })
  // addPlugin
  config.plugins.push(...plugins)
  return config
}



module.exports = override(

  addDecoratorsLegacy(),
  addLessLoader({
    lessOptions: {

      javascriptEnabled: true,
      sourceMap: false
    }
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
    // style: true,
  }),
  customize(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    'views': path.resolve(__dirname, 'src/views'),
    'common': path.resolve(__dirname, 'src/components'),
    'store': path.resolve(__dirname, 'src/store'),
    'routes': path.resolve(__dirname, 'src/routes'),
    'utils': path.resolve(__dirname, 'src/utils'),
    'styles': path.resolve(__dirname, 'src/styles'),
    'assets': path.resolve(__dirname, 'src/assets'),
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    include: [resolve('src/icons')],
    use: [
      {
        loader: 'svg-sprite-loader',
        options: { symbolId: "icon-[name]" }
      }]
  })

)