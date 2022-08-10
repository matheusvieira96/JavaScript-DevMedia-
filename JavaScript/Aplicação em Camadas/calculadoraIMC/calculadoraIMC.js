
const calculaIMC = (peso,altura) => {
    let imc = peso / (altura*altura);
    return imc;
}

const statusIMC = (imc) =>{
    
    let status;
    
    if(imc < 18.5){
        status = "abaixo do peso.";
    }
    else if(imc > 18.5 && imc < 24.55){
        status = "peso normal";
    }
    else if(imc > 24.55 && imc < 30){
        status = "acima do peso";
    }
    else{
        status = "obeso";
    }

    return status;
}

export {calculaIMC , statusIMC};


