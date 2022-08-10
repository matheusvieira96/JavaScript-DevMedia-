import input from "readline-sync";

console.log("Este é um conversor de milhas em KM: \n");

let milhas = input.question("Digite a  quantidade de milhas que deseja converter: ");

let km = milhas / 0.62137;

console.log("O valor da conversão das "+milhas+" milhas foi de: "+km.toFixed(2)+"km");

