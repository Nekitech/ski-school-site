const pathSrc = './src'
const pathDest = './public'

module.exports = {
    root: pathDest,
    html: {
        src: pathSrc + '/html/**/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },

    pug: {
        src: pathSrc + '/pug/pages/**/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    },

    scss: {
        src: pathSrc + '/pug/pages/**/*.{scss,sass}',
        watch: pathSrc + '/pug/**/*.{scss,sass}',
        dest: pathDest + '/css'
    },
    css: {
        src: pathSrc + '/**/**/*.css',
        watch: pathSrc + '/**/**/*.css',
        dest: pathDest + '/css'
    },

    js: {
        src: pathSrc + '/**/**/*.js',
        watch: pathSrc + '/**/**/*.js',
        dest: pathDest + '/js'
    },

    img: {
        src: pathSrc + '/img/**/*.{png,jpeg,jpg,svg,gif}',
        watch: pathSrc + '/img/**/*.{png,jpeg,jpg,svg,gif}',
        dest: pathDest + '/img'
    },

    fonts: {
        src: pathSrc + '/fonts/**/*.{eot,ttf,otf,ttc,woff,woff2,svg}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,ttc,woff,woff2,svg}',
        dest: pathDest + '/fonts'
    },
}