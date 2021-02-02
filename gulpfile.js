const { series, src, dest, watch }= require('gulp'); //Require para importar y exports para exportar 
const sass = require('gulp-sass');

//Funcion que compile SASS
function css() {
    return src ('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))

}
function watchArchivos() {
    watch('src/scss/app.scss', css)
}
exports.css = css;
exports.watchArchivos = watchArchivos;
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
