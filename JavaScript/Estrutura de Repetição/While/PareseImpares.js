let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let numeros_pares = 0;
let numero_impares = 0;

let contador = 0;

while(contador < numeros.length){
    
    if(numeros[contador] % 2 == 0){
        numeros_pares++;
    }else{
        numero_impares++;
    }

    contador++;
}

console.log("O total de números pares é: "+numeros_pares);
console.log("O total de números impares é: "+numero_impares);