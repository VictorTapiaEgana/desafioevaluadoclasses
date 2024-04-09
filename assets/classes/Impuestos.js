export class Impuestos{
    constructor(montoAnual,deducciones){
        this._montoAnual = montoAnual;
        this._deducciones = deducciones;
    }
    get montoAnual(){
        return this._montoAnual;
    }

    set montoAnual(nuevo_monto_anual){
        this._montoAnual = nuevo_monto_anual;
    }

    get deducciones (){
        return this._deducciones;
    }

    set deducciones (nueva_deduccion){
        this._deducciones = nueva_deduccion;
    }
}