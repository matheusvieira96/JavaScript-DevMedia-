const diasDaSemana = [
    "domingo", "segunda-feira", "terça-feira",
    "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
];


// O primeiro parâmetro é a posição inicial no array , o segundo é a quantidade de elementos que serão removidos.

diasDaSemana.splice(2,1); 

 
// removendo "terça-feira"

diasDaSemana.splice(1,3);
// removendo "segunda-feira", "terça-feira", "quarta-feira"