let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 0.05;

for (let propriedade in carro){
    if(propriedade == "preco"){
        let preco = propriedade;

        let preco_desconto = (carro[preco] * percentual_desconto);

        let novo_preco = carro[preco] - preco_desconto;

        console.log("O valor do carro com desconto é de: R$"+novo_preco+",00");
    }else{
        console.log(propriedade + ": " + carro[propriedade]);
    }
}