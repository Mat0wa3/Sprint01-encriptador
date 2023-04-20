let contador = 0;

function copiar(id) {
    let copia = document.getElementById(id);
    navigator.clipboard.writeText(copia.value);
    console.log(`copiado: "${copia.value}"`)
}

function encriptar() {
    let cupcakes = Array.prototype.slice.call(document.getElementsByClassName("old"), 0);
    if (cupcakes) {
        for (element of cupcakes) {
            element.remove();
        }
    }
    let input = document.querySelector(".entrada").value.toLowerCase();
    let texto = input.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".salida").innerHTML += `<p class="encripted"><textarea id="${contador}" class='copia' disabled>${texto}</textarea><button class="copy" onclick="copiar(${contador})"><i class="fa-solid fa-copy"></i></i></button></p>`;
    contador++
}

function desencriptar() {
    let cupcakes = Array.prototype.slice.call(document.getElementsByClassName("old"), 0);
    if (cupcakes) {
        for (element of cupcakes) {
            element.remove();
        }
    }
    let input = document.querySelector(".entrada").value.toLowerCase();
    let texto = input.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".salida").innerHTML += `<p class="encripted"><textarea id="${contador}" class='copia' disabled>${texto}</textarea><button class="copy" onclick="copiar(${contador})"><i class="fa-solid fa-copy"></i></button></p>`;
    contador++
}

let btn_encriptar = document.querySelector("#encriptar");
let btn_desencriptar = document.querySelector("#desencriptar");
btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;

/*
***********************************
***********************************
*****     por Mateo López     *****
*   https://github.com/Mat0wa3    *
***********************************
***********************************
*/