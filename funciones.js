// Utilizar keyword function
// Nombrar función
// Utilizar (), abrir y cerrar función {} 
// Menor a 100 líneas

function myFunction() {
    //Aquí va el cuerpo de la función
    console.log("Hola mundo!");
}

myFunction();

function myName() {
    let name = "Fer Orozco";
    console.log(name);
}

myName();

console.log(a);
let a = "Hoisting let";

console.log(x);
var x = "hola";

console.log(c);
const c = "Hoisting const";

const miNombre = "Fer";
function fiuFiu (x)
console.log (x);

//parametro definido en variable
fiuFiu (nombre);
//Parametro random
fiuFiu ("Fer Orozco");
fiuFiu (2);
//function con mas de 1 Parametro 
function dosParam(x, y) {
    console.log(x + y);
}
//Invocación de dos parametros aleatorios
dosParam("Hola", "Mundo");

//Output
function out(){
    let x = "Hola";
    return x;
}
//Podemos recibir el dato de forma directa
console.log(out());

//Podemos
const receive = out();

console.log(receive);

function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));


function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));

//Objetos
const Conejo = {
    "nombre": "Griselo",
    "edad": 27,
    "color": "Gris",
    "peso": 500
}
