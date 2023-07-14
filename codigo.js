
const tasa = 0.97;

const anual= 365

function calculoFinal (montoDeInversion, cantidadDeDias){
    return (((montoDeInversion * tasa) / anual)* cantidadDeDias);
    

}

let nombreUsuario = prompt ("Ingrese su nombre");

console.log (nombreUsuario);

alert("hola " + nombreUsuario + "!");

let montoDeInversion = prompt ("Por Favor, ingrese el monto en Pesos Argentinos que desea calcular");

while (montoDeInversion <500000){
    alert("Ese monto es muy bajo, por favor, ingresa monto desde $500000");
    montoDeInversion = prompt ("Por Favor, ingrese el monto en Pesos Argentinos que desea calcular");
}


(montoDeInversion >=500000)
alert("El monto es valido, puedes continuar");

let cantidadDeDias = prompt ("Ingrese el Plazo en dias!");

while (cantidadDeDias <30){
    alert ("El Plazo minimo para plazo fijo es de 30 días");
    cantidadDeDias= prompt ("ingrese nuevamente el plazo");
}

 let resultado = calculoFinal (montoDeInversion,cantidadDeDias);
console.log (resultado);
    alert (nombreUsuario + " El interes por " + cantidadDeDias + " dias es de $" + resultado );






