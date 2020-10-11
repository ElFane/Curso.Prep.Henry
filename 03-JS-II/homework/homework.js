// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x>y){
    var mejorX = x;
    return mejorX
  }
  else if (y>x){
    var mejorY = y;
    return mejorY;
  }
  else{
   var CualquierNum = x;
   return CualquierNum;
  }
  return obtenerMayor;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma === 'aleman'){
    var gutentag = 'Guten Tag!';
    return gutentag;
  }
  if (idioma === 'mandarin'){
    var nihao = 'Ni Hao!';
    return nihao;
  }
  if (idioma === 'ingles'){
    var jelow = 'Hello!'
    return jelow;
      }
  else{
    var espa = 'Hola!';
    return espa;
  }
  return saludo;
  }
function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero===10 || numero===5){
      esVerdad = true;
      return esVerdad;
    }
    else{
      esFalse = false;
      return esFalse;
    }
    return esDiezOCinco;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<50 && numero>20){
    return true;
  }
  else{
    return false;
  }
  return estaEnRango;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero === Math.floor(numero)){
    return true;
  }
  else{
    return false;
  }
  return esEntero;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
if (numero%3 === 0 && numero%5 === 0){
    var fi = 'fizzbuzz';
    return fi;
}
else if(numero%5 === 0){
  var bu = 'buzz';
  return bu;
}
else if(numero%3 === 0){
  var amboss = 'fizz'
  return amboss;
}
else{
  return numero;
}
return fizzBuzz;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  for (let i = 0; i >= 0; i++){
    if  (i%i == 0 && i%1 == 0){
      return false;
    }
    else{
      return true;
    }
    return esPrimo;
  }
  }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
