// Подключения
const {src, dest} = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const pluginsConfig = require('../config/pluginsConfig.js')

// Плагины
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const webp = require('gulp-webp')
const gulpif = require('gulp-if')

const img = () => {
    return src(path.img.src)
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 45, progressive: true}),
            imagemin.optipng({optimizationLevel: 1}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest(path.img.dest))

        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpif(pluginsConfig.isProd, imagemin(pluginsConfig.imagemin)))
        .pipe(dest(path.img.dest))
}
module.exports = img