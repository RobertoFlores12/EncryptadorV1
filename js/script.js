const  textArea = document.querySelector(".tex-area");
const  mensaje = document.querySelector(".mensaje");


// letra "e" es convertida a "entre"
// letra "i" es convertida a "imes"
// letra "o" es convertida a "ober"
// letra "a" es convertida a "ai"
// letra "u" es convertida a "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i =0; i<matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i =0; i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
 
function btnCopiar() {
    // Obtener el elemento textarea
    var textarea = document.getElementById("msj2");

    // Seleccionar el texto dentro del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Mostrar un mensaje de éxito
    alert("Texto copiado al portapapeles: " + textarea.value);
}