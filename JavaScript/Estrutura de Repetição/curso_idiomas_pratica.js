let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for(let curso of cursos_idiomas){
    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora = preco_curso / carga_horaria_curso;

    console.log("Nome do curso: "+nome_curso);
    console.log("O valor do curso é de: R$"+preco_curso+",00");
    console.log("A carga horária do curso: "+carga_horaria_curso+" horas");

    if(preco_hora >= 15){
        console.log("O valor da hora é maior que R$15,00")
    }else{
        console.log("O valor da hora é inferior a R$15,00")
    }

    console.log('\n')
}