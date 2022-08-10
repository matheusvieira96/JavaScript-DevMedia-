import input from "readline-sync";

let x = input.question("Digite o valor de X: ");
let y = input.question("Digite o valor de Y: ");
let soma = Number(x) + Number(y); //Em soma é necessário colocar a função Number

console.log("A soma de "+x+ " e " +y+" é: "+soma);



// Em Multiplicação, Divisão e Subtração. Não é necessário utilizar a função Number.
let v = input.question("Digite o valor de V: ");
let h = input.question("Digite o valor de H: ");
let multiplicacao = v * h;

console.log("O valor da multiplicação de "+v+" e "+h+" é "+multiplicacao);