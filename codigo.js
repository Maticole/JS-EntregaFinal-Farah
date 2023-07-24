const ANUAL= 365

const OPCION1 = {

    montoMaximo: 1000000,
    plazo: 30,
    tasa: 0.90

}
const OPCION2 = {

    montoMaximo: 2000000,
    plazo: 60,
    tasa: 0.95

}
const OPCION3 = {

    montoMaximo: 3000000,
    plazo: 90,
    tasa: 0.99

}

const OPCIONES = [OPCION1, OPCION2, OPCION3];

function calcularOpcion (montoDeInversion) {
    // for (let index = 0; index < OPCIONES.length; index++) {
    //     const opcion = OPCIONES[index];
    //     if (opcion.montoMaximo >=montoDeInversion) {
    //         return opcion;
    //     }
        
    // }
    return OPCIONES.find ((opcion) => opcion.montoMaximo >=montoDeInversion ) 
    

}



function calculoFinal (montoDeInversion, opcion){
    return (((montoDeInversion * opcion.tasa) / ANUAL)* opcion.plazo);
    

}

const nombreUsuario = prompt ("Ingrese su nombre");

console.log (nombreUsuario);

alert("hola " + nombreUsuario + "!");

let montoDeInversion = prompt ("Por Favor, ingrese el monto en Pesos Argentinos que desea calcular");

while (montoDeInversion <500000){
    alert("Ese monto es muy bajo, por favor, ingresa monto desde $500000");
    montoDeInversion = prompt ("Por Favor, ingrese el monto en Pesos Argentinos que desea calcular");
}


alert("El monto es valido, puedes continuar");


const opcionElegida = calcularOpcion (montoDeInversion)



let resultado = calculoFinal (montoDeInversion,opcionElegida);
console.log (resultado);
    alert (nombreUsuario + " El interes por " + opcionElegida.plazo + " dias es de $" + resultado );
