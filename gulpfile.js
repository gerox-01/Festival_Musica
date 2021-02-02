const { series }= require('gulp'); //Require para importar y exports para exportar 
function hola() {
    console.log('Hola mundo');
}
hola();


exports.hola = hola;