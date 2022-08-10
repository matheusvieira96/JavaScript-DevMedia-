let notas_trimestrais = [7, 8, 6, 5];

let soma_notas = 0;


for(let contador = 0; contador < notas_trimestrais.length; contador++){
    
    soma_notas = soma_notas + notas_trimestrais[contador];
}

let media = soma_notas/notas_trimestrais.length;

if(media >= 6){
    console.log("Aluno foi aprovado com média: "+media);
}else{
    console.log("Aluno foi reprovado com média: "+media);
}