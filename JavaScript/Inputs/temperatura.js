import input from "readline-sync";

console.log("Conversor de Celsius para Kelvin: \n");

let C = input.question("Digite a quantidade de graus: ");
let K = Number(C) + 273.15;

console.log(C+"ºC é equivalente a "+K.toFixed(2)+"K");