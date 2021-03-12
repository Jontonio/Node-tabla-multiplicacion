const m = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
// const [,,base] = process.argv
// const b = base.split('=')
// const baseReal = b[1]

m.multiplicar(argv.b, argv.l, argv.h)
.then( (res)=> console.log(res) )
.catch( (err)=> console.log(err) )

 /*
    si queremo recibir para metros por consola,
     al ejecutar $ --hola=5, este parametro enviado
     poedemos verlo en console.log(process.argv)
     npm init = crea el package.json 
     para instalar una version en 
     especifico 
     npm i paquete@version
 */


