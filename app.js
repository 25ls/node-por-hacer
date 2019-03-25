//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

const {guardarDB} = require('./por-hacer/por-hacer');

switch(comando){
    case 'crear':
       let data = porHacer.crear(argv.descripcion);
       console.log(data);
    break;
    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('========Por hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('==========================='.green);
        }
        console.log('Mostrar todas las tareas por hacer');
    break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
    break;
    case 'borrar':
        let borrardo = porHacer.borrar(argv.descripcion);
        console.log(borrardo)
    break;
    default:
        console.log('Comando no es reconocido.');
} 