var aluno_academia = {
    id: 10,
    nome: "Matheus Vicente",
    altura: 1.80,
    peso: 120
};

var nome_aluno = aluno_academia.nome;
var altura_aluno = aluno_academia.altura;   
var peso_aluno = aluno_academia.peso;

var imc = (peso_aluno/(altura_aluno*altura_aluno)).toFixed(2);

console.log("O Valor do IMC do aluno é: " + imc);

if(imc < 18.5){
    console.log("O aluno " + nome_aluno + " está a baixo do peso.")
}
else if(imc >= 18.5 && imc <= 24.99){
    console.log("O aluno " + nome_aluno + " está com o peso normal.")
}
else{
    console.log("O aluno " + nome_aluno + " está acima do peso.")
}
