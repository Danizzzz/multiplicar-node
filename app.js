// requireds

// tres tipos
// const fs = require('fs');
// const fs = require('express');
// const fs = require('./'path');


const argv = require('./config/yargs').argv
const colors = require('colors');


const { crearArchivo } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido')

}

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]