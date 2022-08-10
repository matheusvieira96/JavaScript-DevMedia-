import input from "readline-sync";

console.log("Calcular a área de um triângulo: \n");

let base = input.question("Digite a base: ");
let altura = input.question("Digite a altura: ");

let area = (base * altura)/2;

console.log("A área do triângulo é de: "+area);