const texto_aqui = document.querySelector(".texto_aqui")
const mensaje_E_D = document.querySelector(".mensaje_E_D")
const muneco = document.querySelector(".muneco");
const encript_result = document.querySelector(".encript-result");

function estilo_encript(){
    encript_result.style.display="none";
}

function estilo_muneco(){
    muneco.style.display = "";
}

estilo_encript();

function btn_encriptar(){
    const textoEncriptado = encriptar(texto_aqui.value);
    mensaje_E_D.value = textoEncriptado;
    let validacion = /[^(a-z)|(\s)]/g;

    if (validacion.test(texto_aqui.value)) {
        alert("Solo se admiten letras minusculas sin acentos ni caracteres especiales");
        estilo_encript();
        estilo_muneco();
        return "";
        
    } else {

        if (texto_aqui.value == ""){
            estilo_encript();
            estilo_muneco();
        } else {
            encript_result.style.display = "";
            muneco.style.display = "none";
            texto_aqui.value = "";
        }
    }
}

function encriptar(stringEncript){
    let letrasEncript = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncript = stringEncript.toLowerCase();

    for (let i = 0; i < letrasEncript.length;  i++){
        if(stringEncript.includes(letrasEncript[i][0])){
            stringEncript=stringEncript.replaceAll
            (letrasEncript[i][0],letrasEncript[i][1]);
        }
    }


    return stringEncript;
}

function btn_desencriptar(){
    const textoDesencriptado = desencriptar(texto_aqui.value);
    mensaje_E_D.value = textoDesencriptado;
    let validacion = /[^(a-z)|(\s)]/g;

    if (validacion.test(texto_aqui.value)) {
        alert("Solo se admiten letras minusculas sin acentos ni caracteres especiales");
        estilo_encript();
        estilo_muneco();
        return "";
    } else {

        if (texto_aqui.value == ""){
            estilo_encript();
            estilo_muneco();
        } else{
            encript_result.style.display = "";
            muneco.style.display = "none";
            texto_aqui.value = "";
        }
    }
}

function desencriptar(stringDesencript){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencript = stringDesencript.toLowerCase();

    for (let i = 0; i < matrizCodigo.length;  i++){
        if(stringDesencript.includes(matrizCodigo[i][1])){
            stringDesencript=stringDesencript.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }


    return stringDesencript;
}

function btn_copiar(){
    mensaje_E_D.select();
    navigator.clipboard.writeText(mensaje_E_D.value);
    mensaje_E_D.value = "";
    alert("Mensaje copiado exitosamente");
}