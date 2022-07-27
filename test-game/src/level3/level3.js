// No cambies los nombres de las funciones.

//1
export function devolverPrimerElemento(array) {
  // Tu código:
  return array[0];
}

//2
export function devolverUltimoElemento(array) {
  // Tu código:
 
  return array[array.length-1];
}

//3
export function obtenerLargoDelArray(array) {
  // Tu código:
 
  return array.length;

}

//4
export function incrementarPorUno(array) {
  // Tu código:
 
  return array.map(function(elemento){
    return elemento+1;
  } 
  );

}

//5
export function agregarItemAlFinalDelArray(array, elemento) {
  // Tu código:
 
  return array.concat(elemento);

}

//6
export function agregarItemAlComienzoDelArray(array, elemento) {
  /// Tu código:
  return [elemento].concat(array);


}

//7
export function dePalabrasAFrase(palabras) {
  // Tu código:
  return palabras.join(" ");

}

//8
export function arrayContiene(array, elemento) {
  // Tu código:
  return array.includes(elemento);

}

//9
export function agregarNumeros(numeros) {
  // Tu código:
 
  return numeros.reduce(function(a,b){
    return a+b;
  } , 0);
}

//10//NOT YET SOLVED
export function promedioResultadosTest(resultadosTest) {
  // Tu código:
 

  
}

//11
export function numeroMasGrande(numeros) {
 // Tu código:
 //should return the largest number
  return Math.max(...numeros);

}

//12 NO HAY TEST
export function multiplicarArgumentos(arreglo) {
  // Tu código:

}

//13
export function cuentoElementos(arreglo){
 // Tu código:
//should return a counter with the total of numbers greater than 18
let contador = 0;
for(let i = 0; i < arreglo.length; i++){
  if(arreglo[i] > 18){
    contador++;
  }
  
}return contador;}

//14 NOT YET FINISHED
export function diaDeLaSemana(numeroDeDia) {
  // Tu código:
  //should return he name of the day associated with that number


} 


export function empiezaConNueve(n) {
 // Tu código:
  //should return true if the number starts with 9
  return n.toString().startsWith("9");

}


export function todosIguales(arreglo) {
 // Tu código:
  //should return true if all the elements of the array are equal
  return arreglo.every(function(elemento){
    return elemento === arreglo[0];
  }
  );
} 

//NOT YET FINISHED
export function mesesDelAño(array) {  
  // Tu código:
  //should return an array with the names of the months
  return array.map(function(elemento){
    return elemento.toString().substring(0,3);
  }
  );
}


export function mayorACien(array) {
  // Tu código:
  //should return an array with the numbers greater than 100
  return array.filter(function(elemento){
    return elemento > 100;
  }
  );
}

//NOT YET FINISHED
export function breakStatement(numero) {
  // Tu código:

}

//NOT YET FINISHED
export function continueStatement(numero) {
  // Tu código:
  //should return an array with the values ​​resulting from adding 2 in each iteration when the iteration number is different from 5
  return numero.map(function(elemento){
    if(elemento === 5){
      return elemento;
    }else{
      return elemento+2;
    }
  }
  );
}



