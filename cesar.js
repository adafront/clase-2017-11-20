// abc original
// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// abc desplazado
// S T U V W X Y Z A B C D E F G H I J K L M N O P Q R

// ejemplo de encriptacion
// HOLA = ZGDS

// me tiene que devolver el texto encriptado
// console.log( encriptar("HOLA") );

var abc = ["a", "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j' ,'k', 'l' , 'm', 'n', 'ñ', 'o', 'p' , 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// 'u', 'v', 'w', 'x', 'y', 'z', a, b, c, d, e
var abcDesplazado = [];

var n = 13;

for (var i = 0; i < abc.length; i++) {
  // console.log("i:" + i);
  // console.log("i + n:" + (i + n));
  // console.log("(i + n) % abc.length:" + ((i + n) % abc.length));

  abcDesplazado[(i + n) % abc.length] = abc[i];
}

// console.log(abc);
// console.log(abcDesplazado);

var mensaje = "mensajito";
var mensajeEncriptado = "";

// itero por cada caracter de mi string
for (var i = 0; i < mensaje.length; i++) {
  var idxCaracter = abc.indexOf(mensaje[i]);
  mensajeEncriptado += abcDesplazado[ idxCaracter ];

  // itero por cada caracter del abc
  // for (var j = 0; j < abc.length; j++) {
  //   if (mensaje[i] === abc[j]) {
  //     mensajeEncriptado += abcDesplazado[j];
  //   }
  // }
}

console.log(mensajeEncriptado);

var mensajeDesencriptado = "";

for (var i = 0; i < mensajeEncriptado.length; i++) {
  var idxCaracter = abcDesplazado.indexOf(mensajeEncriptado[i]);
  mensajeDesencriptado += abc[ idxCaracter ];

  // itero por cada caracter del abc
  // for (var j = 0; j < abcDesplazado.length; j++) {
  //   if (mensajeEncriptado[i] === abcDesplazado[j]) {
  //     mensajeDesencriptado += abc[j];
  //   }
  // }
}

console.log(mensajeDesencriptado);
