

const diccionarioEncriptaciaon = {
    //es como si fuera un directorio tel. 
    //persn : num,
    //clave : valor   
    'e': 'enter',
    'a': 'ai',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',

    //Claves unicas, si no error. Los valores son repetibles
    //para acceder al dicc, console.log(dicc[clave])
    //Eso retorna el valor
};
let mew = document.getElementById('mew');
let textoTex = document.getElementById('text');

let outputTex = document.getElementById('textoProcesado');
// let pokeAbiera = document.getElementById('pokeOpen');
// let pokeClosed = document.getElementById('pokeClosed');
// let pokeSemi = document.getElementById('pokeSemi');

function botonEncriptar() {
    let pepe = encriptar(textoTex.value);
    outputTex.innerText = pepe;
    ocultarMostrar(mew, outputTex);
};
function botonDesncriptar() {
    let pepe = desencriptar(textoTex.value);
    outputTex.innerText = pepe;
    ocultarMostrar(mew, outputTex);
}




//Oculta el mew y muestra el text
function ocultarMostrar(a, b) {
    a.style = 'display:none';
    b.style = 'display:block';
}

//En esta funcion:
//param (a), palabra a encriptrar
function encriptar(a) {

    //estamos creando un String vacio, el cual se va a llenar de acuerdo a la palabra a encriptar
    let palabraEncriptada = '';
    //Se recorre elk texto a encriptar
    //em´pieza en la posicion 0
    //Si esta posicion existe en el dicc
    for (let index = 0; index < a.length; index++) {
        if (a[index] in diccionarioEncriptaciaon) {
            //En caso de que se cumpla pasa esto, en palabraEncriptada, se agrega el valor del dicc, en lugar de la palabra de la cadena. 
            palabraEncriptada += diccionarioEncriptaciaon[a[index]];
        }
        else {
            //si no se agrega lo que ya taba.
            palabraEncriptada += a[index];
        }
    }

    console.log(palabraEncriptada);
    return palabraEncriptada;
};

console.log(encriptar(pepe));

//Le tamos diceindo que va a recorrer clave x clave en el dicc. 
for (let key in diccionarioEncriptaciaon) {
    //pero no los valores 
    console.log(diccionarioEncriptaciaon[key]);
    //hola
    //0, 1,2,3

}
let hola = 'hola';
console.log(hola[2])
//El [] es pa usar posiciones, tambien se puede usar para obj. 
//las {}, es para abrir ciclo, diccionario, bloques de codigo o JSON.
let vector = ['chipi', 'chipi1', 'chapa', 'chapa2'];
//si tiene mas de un tippo de dato son tuplas
console.log(vector[2]);
//indexOf =  busca la posicion/el indice
//              o.0?
//0-o?

function desencriptar(palabraEncriptada) {
    // invertir el diccionario
    let diccionarioDesencriptacion = {};
    // recorrer el diccionario y luego invertirlo
    for (let clave in diccionarioEncriptaciaon) {

        diccionarioDesencriptacion[diccionarioEncriptaciaon[clave]] = clave;

        // console.log(clave)
    }
    console.log(diccionarioDesencriptacion);
    // regex con las palabras del diccionario
    let regex = new RegExp(Object.keys(diccionarioDesencriptacion).join('|'), 'g');

    // reemplazar las palabras que coinciden
    let palabraDesencriptada = palabraEncriptada.replace(regex, match => {
        // console.log(diccionarioDesencriptacion[match])
        return diccionarioDesencriptacion[match]
    });

    return palabraDesencriptada;
}


let papa = 'papapapipiape';

console.log(desencriptar(encriptar(pepe)));