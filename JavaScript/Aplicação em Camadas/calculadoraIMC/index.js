
import {calculaIMC , statusIMC} from './calculadoraIMC.js'
import {validaAltura , validaPeso} from './validaPesoAltura.js'
import input from 'readline-sync'


let peso = input.question("Digite o seu peso: ");
let altura = input.question("Digite a sua altura: ");

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if(verificaPesoValido && verificaAlturaValida){

    let resultadoIMC = calculaIMC(peso,altura);
    let status_IMC = statusIMC(resultadoIMC);

    console.log("Seu IMC é " +resultadoIMC.toFixed(2)+" você está: "+status_IMC);
}
else{
    console.log("Impossível calcular IMC abaixo de 0");
}
