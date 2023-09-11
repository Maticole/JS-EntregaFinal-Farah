const ANUAL = 365

let opciones;

function cargarOpciones() {
    fetch("./opciones.json")
        .then((response) => response.json())
        .then((json) => opciones = json);

}

function calcularOpcion(montoDeInversion) {
    return opciones.find((opcion) => opcion.montoMaximo >= montoDeInversion)
}

function calculoFinal(montoDeInversion, opcion) {
    return (((montoDeInversion * opcion.tasa) / ANUAL) * opcion.plazo);
}

function validarEdad() {
    const edadUsuario = document.getElementById("edad").value;
    const guardaEdad = {
        edad: edadUsuario,
    }
    // console.log(edadUsuario >= 18 ? "podés ingresar" : "No podés Ingresar, sos menor");

    if (edadUsuario < 18) {
        Swal.fire({
            title: 'Eres Menor!',
            text: "No puedes Continuar",
            icon: 'error',
            confirmButtonText: 'Aceptar',
        });
        return false;
    } else {
        return true;
    }
}

function calcular(event) {
    event.preventDefault();

    if (validarEdad() == false) {
        return;
    }

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

    const opcionElegida = calcularOpcion(montoDeInversion)

    const resultado = calculoFinal(montoDeInversion, opcionElegida);
    const textoResultado = document.getElementById("textoResultado");
    textoResultado.textContent = nombreUsuario + "  El interes por " + opcionElegida.plazo + "   dias es de   " + resultado;
}

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
        const clima = result.current.temp_c;
        const climatologia = document.getElementById("climatologia");
        climatologia.textContent = clima + "  Grados"
    } catch (error) {
        console.error(error);
    }
}

cargarOpciones();
mostrarClima();

const boton = document.getElementById("boton");
boton.addEventListener("click", calcular);
