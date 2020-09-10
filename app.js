const argv = require('./config/yargs').argv;
const colors = require('colors');
const colors2 = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
//let base = '5';

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors2.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}


//let parametro = argv[2];
//let baseParametro = parametro.split('=')[1];


//console.log('Limite', argv.limite);