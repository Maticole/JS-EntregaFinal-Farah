
const tasa = 0.97;

const anual= 365 


let nombreUsuario = prompt ("Ingrese su nombre");

console.log (nombreUsuario);

alert("hola " + nombreUsuario + "!");

let montoDeInversion = prompt ("Por Favor, ingrese el monto en Pesos Argentinos que desea calcular"); 
if (montoDeInversion >= 499999) {
    alert("El monto es valido, puedes continuar");
    let cantidadDeDias = prompt ("Ingrese el Plazo en dias!")

let resultado = (((montoDeInversion * tasa) / anual)* cantidadDeDias)
console.log (resultado)
alert (nombreUsuario + " El interes por " + cantidadDeDias + " dias es de $" + resultado )
}
else {
    alert("Ese monto es muy bajo, mejor pagate un asado y disfrutalo con amigos")};



