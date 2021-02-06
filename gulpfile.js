const { series, src, dest, watch }= require('gulp'); //Require para importar y exports para exportar 
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');

//Funcion que compile SASS

const path = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
}

function css() {
    return src (path.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))

}

function minificarcss() {
    return src(path.scss)
    .pipe( sass({
        outputStyle: 'compressed'
    }))
    .pipe( dest('./build/css'))
}

function imagenes() {
    return src(path.imagenes)
    .pipe( imagemin())
    .pipe( dest('./build/img'))
    .pipe( notify({ message: 'Imagenes Minificadas'}));
}

function versionWebp() {
    return src(path.imagenes)
    .pipe (webp () )
    .pipe( dest('./build/img'))
    .pipe( notify({ message: 'Version WEBP lista'}))
}

function watchArchivos() {
    watch(path.scss, css)//* = La carpeta - ** = Todo
}
exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series (css, imagenes, versionWebp ,watchArchivos);
//Practica o inducción acerca de la funcionalidad de gulp que es mediante funciones de js y sobre serie (ejecuta las funciones en orden) y parallel (ejeucta las funciones por tiempo vs proceso)
// function css(done) {
//     console.log('Compilando CSS...');
//     done();
// }

// function javascript(done) {
//     console.log('Compilando. JS..')
//     done();
// }

// function minificarHTML(done) {
//     console.log('Minificando...')
//     done();
// }
// // exports.default = series(css, javascript, minificarHTML);
// exports.default = parallel(css, javascript, minificarHTML);
