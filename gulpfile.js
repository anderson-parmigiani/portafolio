const {src, dest, watch, series} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const minify = require('gulp-minify');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

const css = done => {
    src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'))

    done();
}

const js = done => {
    src('src/js/**/*.js')
        .pipe(minify({noSource: true}))
        .pipe(dest('build/js'))

    done();
}

const imagenes = () => {
    return src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'))
}

const versionWebp = () => {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
}
const versionAvif = () => {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'))
}

const dev = () => {
    watch('src/scss/**/*.scss', css);
    watch('*.js', js);
    watch('src/img/**/*', series(imagenes, versionWebp, versionAvif));
}


exports.css = css;
exports.js = js;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = dev;
exports.default = series(imagenes, versionWebp, versionAvif, css, js, dev);