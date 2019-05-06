module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        files: [
          {
            'filter': ['**/*']
          }
        ],
        asar: true
      },
      mainProcessFile: 'src/main/index.js',
      mainProcessWatch: ['src/main']
    }
  },
  productionSourceMap: false
}
