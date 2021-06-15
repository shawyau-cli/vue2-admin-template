'use strict';
const path = require('path');

//正则检测当前是否为开发环境
exports.regDev = RegExp(/development/);

//cdn外链地址 对应的版本可以看package.json
exports.cdnMap = {
  css: [],
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.6.13/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js',
    'https://cdn.jsdelivr.net/npm/vue-router@3.5.1/dist/vue-router.min.js',
    'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js',
  ],
};

// 需要扩展的资源
exports.externals = {
  vue: 'Vue',
  vuex: 'Vuex',
  'vue-router': 'VueRouter',
  axios: 'axios',
};

//压缩代码配置
exports.uglifyJsPluginOptions = {
  uglifyOptions: {
    compress: {
      drop_debugger: true, //生产环境自动删除debugger
      drop_console: true, //生产环境自动删除console
    },
    warnings: false,
  },
  sourceMap: false, //是否生成map文件
  parallel: true, //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
};

// 代码分割配置
exports.splitChunksOptions = {
  chunks: 'all',
  cacheGroups: {
    libs: {
      name: 'chunk-libs',
      test: /[\\/]node_modules[\\/]/,
      priority: 10,
      chunks: 'initial', // only package third parties that are initially dependent
    },
    commons: {
      name: 'chunk-commons',
      test: path.join(__dirname, 'src/components'), // can customize your rules
      minChunks: 3, //  minimum common number
      priority: 5,
      reuseExistingChunk: true,
    },
  },
};
