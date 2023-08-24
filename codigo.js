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
    return OPCIONES.find ((opcion) => opcion.montoMaximo >=montoDeInversion ) 
    


}


function calculoFinal (montoDeInversion, opcion){
    return (((montoDeInversion * opcion.tasa) / ANUAL)* opcion.plazo);
    


}



function calcular (event){
    event.preventDefault();        


    const nombreUsuario = document.getElementById("nombre").value;
    
    const guardaNombre = {
        nombre: nombreUsuario,
    }


    const usuarioJSON = JSON.stringify(guardaNombre);
    localStorage.setItem("nombreUsuario", usuarioJSON);


    const nombreUsuarioEnLocalStorage = localStorage.getItem("nombreUsuario");
    const usuarioObjeto = JSON.parse(nombreUsuarioEnLocalStorage);
    const nombreLS = document.getElementById("nombre").value;


    


    const montoDeInversion = document.getElementById("montoDeInversion").value;


    const opcionElegida = calcularOpcion (montoDeInversion)


    const resultado = calculoFinal (montoDeInversion,opcionElegida);
    const textoResultado = document.getElementById("textoResultado");
    textoResultado.textContent = nombreUsuario + "  El interes por " + opcionElegida.plazo + "   dias es de   " + resultado;
}
const boton= document.getElementById("boton");
boton.addEventListener("click", calcular);


    
const sweetAlert = document.querySelector("#sweetAlert");

sweetAlert.addEventListener("click", (event) => {
    event.preventDefault();
    const edadUsuario = document.getElementById("edad").value;
const guardaEdad = {
    edad: edadUsuario,
}

console.log (edadUsuario >= 18 ? "podés ingresar" : "No podés Ingresar, sos menor");
    
    
    if (edadUsuario < 18){

        
    Swal.fire({
        title: 'Eres Menor!',
        text: "No puedes Continuar",
        icon: 'error',
        confirmButtonText: 'Aceptar',
        
        
    })

    }
})

async function mostrarClima() {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Argentina'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5f92cb857amsh5c8c05d9020f306p1249c2jsn5e3225a6cb45',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const clima= result.current.temp_c;
        const climatologia = document.getElementById("climatologia");
        climatologia.textContent = clima + "  Grados"

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

mostrarClima();
