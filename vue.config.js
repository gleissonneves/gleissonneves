const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/gleissonneves',
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Gleisson Neves - Front-end Developer';
      return args;
    });
  },
});
