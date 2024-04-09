import { Cliente }  from './assets/classes/Clientes.js'
import { Impuestos } from './assets/classes/Impuestos.js'

let outputColor = "color:green; font-size:18px;"

let impuestos1 = new Impuestos(500000,10000)
let cliente1 = new Cliente('Victor',impuestos1)

console.clear()

console.log("%c Datos Originales" ,outputColor)
console.log(`Nombre : ${cliente1.nombre} ,Total Impuesto : ${cliente1.calcularImpuesto()}`)

console.log("%c Modificacion del Monto Anual",outputColor)
impuestos1.montoAnual = 600000
console.log(`Nombre : ${cliente1.nombre} ,Total Impuesto Nuevo: ${cliente1.calcularImpuesto()}`)

console.log("%c Cambio del nombre del Cliente",outputColor)
cliente1.nombre="Juan"
console.log(`Nombre : ${cliente1.nombre} ,Total Impuesto Nuevo: ${cliente1.calcularImpuesto()}`)



///// LINEA DE COMANDO PARA TRANSPILAR DE ES6 A ES5 ////
/******************************************************/
// ->    npx babel main.js --out-file main-es5.js   <- /
//    Se Genera archivo "main-es5.js" el cual tiene el /
//                codigo ya convertido.                /
/******************************************************/