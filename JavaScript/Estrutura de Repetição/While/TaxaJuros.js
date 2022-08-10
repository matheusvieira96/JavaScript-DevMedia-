let capital_emprestado = 2600;
let taxa_juros = 0.02; // 2%

let contador = 1;
let parcelas_totais = 6;

console.log("O valor do capital emprestado foi de: R$"+capital_emprestado+",00"+"\n");

while(contador <= parcelas_totais){
    let numero_parcelas = contador;

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcelas;

    
    console.log("A taxa de juros no período de " + numero_parcelas +" mes(es) é de R$ "+juros_emprestimo+",00");
    contador++
}

