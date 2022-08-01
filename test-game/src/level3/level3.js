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

export function diaDeLaSemana(numeroDeDia) {
  // Tu código:
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral";
  }
}

export function empiezaConNueve(n) {
  // Tu código:
  let numero = parseInt(n.toString().charAt(0));
  if (numero === 9) return true;
  else {
    return false;
  }
}

export function todosIguales(arreglo) {
  // Tu código:
  if (typeof arreglo) {
    let primerElemento = arreglo[0];
    return arreglo.every(function (elemento) {
      return elemento === primerElemento;
    });
  }
}

export function mesesDelAño(array) {
  // Tu código:
  let meses = [];
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] === "Marzo" ||
      array[i] === "Noviembre" ||
      array[i] === "Enero"
    ) {
      meses.push(array[i]);
    }
  }
  if (
    meses.includes("Marzo") &&
    meses.includes("Noviembre") &&
    meses.includes("Enero")
  ) {
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

export function mayorACien(array) {
  // Tu código:
  let mayor = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayor.push(array[i]);
    }
  }
  return mayor;
}

export function breakStatement(numero) {
  // Tu código:
  let i = 0;
  const array = [];

  do {
    i++;
    numero += 2;
    if (numero === i) {
      break;
    } else {
      array.push(numero);
    }
  } while (i < 10); //devolver 10 numeros en el array
  if (array.length === 10) {
    return array;
  }
  return "Se interrumpió la ejecución";
}

export function continueStatement(numero) {
  // Tu código:

  const array = [];
  let sumar = numero
  for(let i=0; i<10; i++){
  if(i===5){
    continue; //evita el 5
  }else{
    sumar=sumar + 2
    array.push(sumar);
  }
}
return array;
}