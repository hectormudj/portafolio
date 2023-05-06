function encriptadorDeTexto (){
    var texto = document.querySelector("#input-texto").value;
    var textoOculto = texto.replace(/a/gi, "01100001").replace(/e/gi, "01100101").replace(/i/gi, "01101001").replace(/o/gi, "01101111").replace(/u/gi, "01110101").replace(/b/gi, "01100010").replace(/c/gi, "01100011").replace(/d/gi, "01100100").replace(/f/gi, "01100110").replace(/g/gi, "01100111").replace(/h/gi, "01101000").replace(/j/gi, "01101010").replace(/k/gi, "01101011").replace(/l/gi, "01101100").replace(/m/gi, "01101101").replace(/n/gi, "01101110").replace(/ñ/gi, "11110001").replace(/p/gi, "01110000").replace(/q/gi, "01110001").replace(/r/gi, "01110010").replace(/s/gi, "01110011").replace(/t/gi, "01110100").replace(/v/gi, "01110110").replace(/w/gi, "01110111").replace(/x/gi, "01111000").replace(/y/gi, "01111001").replace(/c/gi, "01111010").replace(/ /gi, "00100000");

    document.querySelector(".text-input-salida").value = textoOculto;
    document.querySelector("#input-texto").value;
    alert
    }


    
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptadorDeTexto;

    function recuperarTexto (){ var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/01100001/gi, "a").replace(/01100101/gi, "e").replace(/01101001/gi, "i").replace(/01101111/gi, "o").replace(/01110101/gi, "u").replace(/01100010/gi, "b").replace(/01100011/gi, "c").replace(/01100100/gi, "d").replace(/01100110/gi, "f").replace(/01100111/gi, "g").replace(/01101000/gi, "h").replace(/01101010/gi, "j").replace(/01101011/gi, "k").replace(/01101100/gi, "l").replace(/01101101/gi, "m").replace(/01101110/gi, "n").replace(/11110001/gi, "ñ").replace(/01110000/gi, "p").replace(/01110001/gi, "q").replace(/01110010/gi, "r").replace(/01110011/gi, "s").replace(/01110100/gi, "t").replace(/01110110/gi, "v").replace(/01110111/gi, "w").replace(/01111000/gi, "x").replace(/01111001/gi, "y").replace(/01111010/gi, "z").replace(/00100000/gi, " "); 
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = recuperarTexto;