import { Cliente }  from './assets/classes/Clientes.js'
import { Impuestos } from './assets/classes/Impuestos.js'

let impuestos1 = new Impuestos(500000,10000)

let cliente1 = new Cliente('Victor',impuestos1)

console.clear()
console.log(`Nombre : ${cliente1.nombre} ,Total Impuesto : ${cliente1.calcularImpuesto()}`)
impuestos1.montoAnual = 600000
console.log(`Nombre : ${cliente1.nombre} ,Total Impuesto Nuevo: ${cliente1.calcularImpuesto()}`)
console.log('')
cliente1.nombre = "Juanito"
console.log(`Nombre : ${cliente1.nombre} ,Total Impuesto : ${cliente1.calcularImpuesto()}`)
console.log(`Nombre : ${cliente1.nombre} ,Total Impuesto Nuevo: ${cliente1.calcularImpuesto()}`)


///// LINEA DE COMANDO PARA TRANSPILAR DE ES6 A ES5 ////
/******************************************************/
// ->    npx babel main.js --out-file main-es5.js   <- /
//    Se Genera archivo "main-es5.js" el cual tiene el /
//                codigo ya convertido.                /
/******************************************************/