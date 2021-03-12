const { describe } = require('yargs');

const argv = require('yargs')
        .option('b',{
                alias:'base', // este es un alias de la forma corta
                type:'number', // el tipo de parametro
                demandOption:true, // verifica si el para metro es opcionala,
                describe:'Es la base de la tabla de multiplicar'
        })
        .option('h',{
                alias:'hasta',
                type:'number',
                demandOption: false,
                describe:'Indica el limite de la tabla'
        })
        .option('l',{
                alias:'listar',
                type:'boolean',
                demandOption: false,
                describe:'muestra la lista de la tabla'
        })
        .check( (argv, options)=>{
                if(isNaN(argv.b)){
                    throw  'la base tiene que ser un número';
                }
                    return true;
                })
        .argv;

module.exports = argv;