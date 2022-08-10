let notas = [8,5,6,5];

let total_notas = notas.length;

let media = (notas[0]+notas[1]+notas[2]+notas[3]) / total_notas;

if(media < 7 ){
    console.log("O aluno foi reprovado com média: "+media)
}else if (media >= 7){
    console.log("O aluno foi aprovado com média: "+media)
}else{
    console.log("Ocorreu um erro ao calcular a nota do aluno, tente novamente mais tarde.")
}
