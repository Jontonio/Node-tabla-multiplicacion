const fs = require('fs');
const colors = require('colors')

const multiplicar = async(base = 12, listar = false, lim = 12) =>{
    try {

        console.clear();
        let contenido, consola = '';

        for(let i=1; i<=lim; i++){
            contenido += `${base} x ${i} = ${i*base}\n`;
            consola += `${base} ${'x'.red} ${i} = ${colors.blue(i*base)}\n`;
        }

        if (listar){
            console.log('==========================='.red)
            console.log('====Tabla de multiplicar==='.rainbow)
            console.log('==========================='.red)
            console.log(consola);
        }

        // grabando en un archivo txt 
        fs.writeFileSync(`salida/tabla-${base}.txt`,contenido)
        return `tabla-${base}.txt creado`.rainbow;

    } catch (error) {
        throw `Error al crear archivo`;
    }
}

// para poder exportar un objeto
module.exports = {
    multiplicar: multiplicar
    // or 
    // only multiplicar 
}
