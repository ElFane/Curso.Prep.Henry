// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var arrayLargo = array.length;
  return arrayLargo;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i = 0; i < array.length; i++){ 
    array[i] = array[i] + 1;
    }
    return array;
    
  }

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(' ');
  
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(array.includes(elemento)){
    return true;
  }
  else{
    return false;
  }
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return numeros.reduce(reducer)
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0; //almacena la suma de las iteraciones del array
  
  for (i = 0; i < resultadosTest.length; i++){ //itera en un bucle los elementos del array
     suma+= resultadosTest[i]             //suma de dos elementos, y los devuelve a la variable suma

  }
  var promedio = suma / resultadosTest.length; //promedia los 2 valores obtenidos por la suma de ambos
  return promedio; // retorna el valor de promedio
  
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  
  var numeroGrande = 0;
  for(i = 0; i < numeros.length; i++){ // recorre la matriz
  	if(numeroGrande <= numeros[i]){ //condicion 'if' si el numero almacenado es menor o igual al numero del array 
  		numeroGrande = numeros[i] ; //asigna el valor
  	}  	  	 
}
return numeroGrande;//retorna el valor de numeroGrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  
  if(arguments.length < 1){

  	return 0
  	}
  
    var producto1 = 1;
  	for (i = 0; i < arguments.length; i++)
  	{  	 
  	producto1 = producto1 * arguments[i];	
  		
  	  	 
  }
  return producto1;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
