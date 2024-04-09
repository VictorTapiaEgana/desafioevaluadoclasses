"use strict";

var _Clientes = require("./assets/classes/Clientes.js");
var _Impuestos = require("./assets/classes/Impuestos.js");
var impuestos1 = new _Impuestos.Impuestos(500000, 10000);
var cliente1 = new _Clientes.Cliente('Victor', impuestos1);
console.clear();
console.log("Nombre : ".concat(cliente1.nombre, " ,Total Impuesto : ").concat(cliente1.calcularImpuesto()));
impuestos1.montoAnual = 600000;
console.log("Nombre : ".concat(cliente1.nombre, " ,Total Impuesto Nuevo: ").concat(cliente1.calcularImpuesto()));
console.log('');
cliente1.nombre = "Juanito";
console.log("Nombre : ".concat(cliente1.nombre, " ,Total Impuesto : ").concat(cliente1.calcularImpuesto()));
console.log("Nombre : ".concat(cliente1.nombre, " ,Total Impuesto Nuevo: ").concat(cliente1.calcularImpuesto()));
