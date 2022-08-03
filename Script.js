nombre = prompt("¿Cómo te llamas?");
console.log(nombre);

// Mejores prácticas

// camelCase 
//  Utilizar mayusculas en la mitad de nuestras variables
// variableTriangulo, miNombre, miEdad, miDireccion

// Palabras reservadas
// No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, var, etc...
/*
var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;
*/

// Seguir un standard personal

// Pueden contener numeros, letras, guion bajo, simbolo de dolar
var a;
var a1;
var a_Nombre;
var a$Direccion;


// Declaracion de variables
// Type Number
var edad = 24;
var peso = 78;
var miopia = 3;
var astigmatismo = 3;

// Type Boolean
var ciego = true;
var hambre = true;
var bateria = false;
var ia = true;


// Type String
var nombre = "Zabdiel Diaz";
var ciudad = 'Aguascalientes';
var nacionalidad = `Mexicano`;

// Type null
var ganasDeBibir = null;
var nineros = null;
var briAmonestaciones = null;

// Variables declaradas con un mismo valor
var x, y, z = 4;

// Variables undefined
var xx, yy, zz; 

// Variable tres = 4
//  var dos = tres
//  var uno = tres
var uno = dos = tres = 4;

// Escribir en una sola linea variables undefined de nuestro carrito de compras

var yogurt, leche, queso;

//TypeOf

var a = 2;
typeof (a);
//Num
var b = "2";
typeof (b);
//String
var c = true;
typeof (a);
//boolean
var d = null;
typeof (d);
//Object

//isNan() es o no es número
isNaN(NaN);
//true

var a = 1;

let a = 1;
//Es un dato que NO va a cambiar
const a = 3;

const b = ["Hola", "Adiós"];