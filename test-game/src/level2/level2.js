// No cambies los nombres de las funciones.
//1
export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:

  let mayor = x > y ? x : y;
  return mayor;
}
//2
export function mayoriaDeEdad(edad) {
  // Tu código:

  let mayoria = edad >= 18 ? 'Allowed' : 'Not allowed';
  return mayoria; 
}
  
export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  // Tu código:
  let conection = status === 1 ? 'Online' : status === 2 ? 'Away' : status === 3 ? 'Offline' : 'Offline';
  return conection; 
}

export function saludo(idioma) {  
  // Tu código:
  switch (idioma) {
    case 'aleman':
      return 'Guten Tag!';
    case 'ingles':
      return 'Hello!';
    case 'mandarin':
      return 'Ni Hao!';
    default:
      return 'Hola!';
}}

export function colors(color) {  
  //Usar el statement Switch.
  // Tu código:
  switch (color) {
    case 'red':
      return 'This is red';
    case 'blue':
      return 'This is blue';
    case 'green':
      return 'This is green';
    case 'orange':
      return 'This is orange';
    case 'pink':
      return 'Color not found';
    default:
      return 'Color not found';
  }
}

export function esDiezOCinco(numero) {
  // Tu código:

  let esDiezOCinco = numero === 10 || numero === 5 ? true : false;
  return esDiezOCinco;
}

export function estaEnRango(numero) {  
  // Tu código:
  if(numero !== 10 && numero !== 20 && numero !== 50 && numero !== 100) {
    return true;
  }
  return false;
}

export function esEntero(numero) {
  // Tu código:
  if(numero % 1 === 0) {
    return true;
  }else {
    return false;
  }
}

export function fizzBuzz(numero) {
  // Tu código:
  if(numero % 3 === 0 && numero % 5 === 0) {
    return 'fizzbuzz';
  }
  if(numero % 3 === 0) {
    return 'fizz';
  }
  if(numero % 5 === 0) {
    return 'buzz'; 
  }
  return numero;
}
//NOT YET COMPLETED
export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Chequea si alguno de los numeros es negativo, si es así, devuelve falso.
  // Tu código:
  if(num1>0 && num1 > num2 && num1 > num3) {
    return 'Número 1 es mayor y positivo'
  }
  //chequear si hay negativos
  if(num1 <= 0 || num2 < 0 || num3 < 0) {
    return 'Hay negativos'
  }
  if(num3 > num1 && num3 > num2) {
    return num3 +1
  }
  if(num1 === 0 || num2 === 0 || num3 === 0) {
    return 'Error'
  }
}

export function esPrimo(numero) {
  /// Tu código:
  if(numero === 1) {
    return false;
  }
  if(numero === 2) {
    return true;
  }
  for(let i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
        return true;  
}

export function esVerdadero(valor){
  // Tu código:

  return;
}

export function tablaDelSeis(){
  // Tu código:

  return;
}

export function tieneTresDigitos(numero){
  // Tu código:

  return ;  
}

export function doWhile(numero) {  
  //Usar el bucle do ... while.
  return;
}