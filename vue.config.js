const externals = {
  vue: 'Vue'
}

module.exports = {
  chainWebpack: config => {
    config.externals = externals
    return config
  }
}