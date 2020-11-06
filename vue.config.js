const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }

    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}