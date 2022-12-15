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
        src: pathSrc + '/pug/**/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    },

    scss: {
        src: pathSrc + '/**/**/*.{scss,sass}',
        watch: pathSrc + '/**/**/*.{scss,sass}',
        dest: pathDest + '/css'
    },
    css: {
        src: pathSrc + '/**/**/*.css',
        watch: pathSrc + '/**/**/*.css',
        dest: pathDest + '/css'
    },

    js: {
        src: pathSrc + '/js/**/*.js',
        watch: pathSrc + '/js/**/*.js',
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