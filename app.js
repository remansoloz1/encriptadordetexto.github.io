
document.getElementById('desencriptado').addEventListener('input', function() {
    var image = document.getElementById('image');
    var botondecopiado=document.getElementById('botondecopiado');
    if (this.value.length > 0) {
        image.style.display = 'none';
        botondecopiado.style.display='block';
    } else {
        image.style.display = 'block';
        botondecopiado.style.display='none';
    }
});





function encr(){
    let text=document.getElementById('encriptado').value;
    //let text=prompt('Ingresa texto a encriptar');
    const mapaEncriptado={
        'a':'ai',
        'e':'enter',
        'i':'imes',
        'o':'ober',
        'u':'ufat',
    };
    const regex=/[aeiou]/g;
    let resultado=text.replace(regex,(match)=>mapaEncriptado[match]);
    document.getElementById('desencriptado').value=resultado;
    console.log(resultado);
    image.style.display = 'none';
    botondecopiado.style.display='block';
}
function desencr(){
    let text=document.getElementById('encriptado').value;
    //let text=prompt('Ingrese texto a desencriptar');
    const mapaDesencriptado={
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    const regex=/ai|enter|imes|ober|ufat/g;
    let resultado=text.replace(regex,(match)=>mapaDesencriptado[match]);
    document.getElementById('desencriptado').value=resultado;
    console.log(resultado);
    image.style.display = 'none';
    botondecopiado.style.display='block';
}

function borrado(){
    document.getElementById('encriptado').value='';
    document.getElementById('desencriptado').value='';
    if (window.matchMedia('(max-width: 772px)').matches) {
        image.style.display='none';
        botondecopiado.style.display='none';
    } else {
        image.style.display='block';
        botondecopiado.style.display='none';
    }
}

function copiado(){
    let texto=document.getElementById('desencriptado');
    texto.select();
    document.execCommand('copy');
}