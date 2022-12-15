// Подключения
const {src, dest} = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const pluginsConfig = require('../config/pluginsConfig.js')

// Плагины
const usePug = require('gulp-pug')
const webpHtml = require('gulp-webp-html')

const pug = () => {
    return src(path.pug.src)
        .pipe(usePug(pluginsConfig.pugConf))
        .pipe(webpHtml())
        .pipe(dest(path.pug.dest))
}

module.exports = pug