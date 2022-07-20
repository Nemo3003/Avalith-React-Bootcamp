
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(name) {
  // Tu código:
  if(typeof name === 'string'){
    return name
  }else{
    let named = name.toString()
    return named;
  }

}

export function suma(x,y) {
 // Tu código:

  return x + y;  
}
//3
export function resta(x,y) {
 // Tu código:

  return x - y;
}
//4
export function multiplica(x,y) {
  // Tu código:

  return x* y;
}
//5
export function divide(x,y) { 
  // Tu código:

  return x/y;
}
//6
export function sonIguales(x,y) {  
  // Tu código:

  return x === y;  
}
//7
export function tienenMismaLongitud(x,y) {  
  // Tu código:

  if(x.length === y.length){
    return true;
  }else{
    return false;
  }
}
//8
export function menosQueNoventa(num) {  
  // Tu código:

  let x = num < 90? true : false;
  return x;
}
//9
export function mayorQueCincuenta(num) {  
  // Tu código:

  let y = num > 50? true : false;
  return y;
}
//10
export function obtenerResto(x,y) {  
  // Tu código:

  return x % y;
}
//11
export function esPar(num) {
  // Tu código:

  let numy = num % 2 === 0 ? true : false;
  return numy;
}
//12
export function esImpar(num) {  
  // Tu código:

  let impar = num % 2 !== 0? true : false;
  return impar;
}
//13
export function elevarAlCuadrado(num) {  
  // Tu código:

  return num**2;
}
//14
export function elevarAlCubo(num) { 
  // Tu código:

  return num**3;
}
//15
export function elevar(num, exponent) {  
  // Tu código:

  return num**exponent; 
}
//16
export function redondearNumero(num) {  
  // Tu código:

  return Math.round(num);
}
//17
export function redondearHaciaArriba(num) { 
  // Tu código:

  return Math.ceil(num)
}
//18
export function numeroRandom() {  
  // Tu código:

  return Math.random();
}
//19
export function esPositivo(numero) {
  // Tu código:
  if (numero === 0){
    return false;
  }
  else if(numero < 0){
    return "Es negativo";
  }
  else{
    return "Es positivo";
  }
  
}
//20
export function agregarSimboloExclamacion(str) {  
  // Tu código:

  return str + "!";
}
//21
export function combinarNombres(fname,lname) {
  // Tu código:

  return fname + " " + lname;
}
//22
export function obtenerSaludo(name) {
  // Tu código:

  return `Hola ${name}!`;
}
//23
export function obtenerAreaRectangulo(alto, ancho) {  
  // Tu código:
  return alto * ancho;
}

//24
export function retornarPerimetro(lado){
  // Tu código:

  return lado * 4;
}

//25
export function areaDelTriangulo(base, altura){
  // Tu código:
  return (altura*base) / 2;
}

//26
export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  let dolar = 1.20;
  return euro * dolar;
}

//27
export function esVocal(letra){
  // Tu código:
  let letras = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"? "Es vocal" : "Dato incorrecto";
  return letras;
}
