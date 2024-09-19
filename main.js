let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena")

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const cadenaNumeros = "0123456789";
const caracteresEspeciales = "!@#$%^&*()"

function generar(){

    let numeroDigitado = parseInt(cantidad.value);

    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = " ";

    password += letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)];
    password += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    password += cadenaNumeros[Math.floor(Math.random() * cadenaNumeros.length)];
    password += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
    

    for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        

        password += caracterAleatorio;

    }
    contrasena.value = password
}

function limpiar(){

    cantidad.value = "";
    contrasena.value = "";
}




