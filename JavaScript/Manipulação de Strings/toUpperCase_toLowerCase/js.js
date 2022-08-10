let email_acesso = 'matheus@email.com';
let email_cadastrado = 'MATHEUS@email.com';

if(email_acesso.toLowerCase() == email_cadastrado.toLowerCase()){
    console.log("Email de confirmação enviado para sua caixa de entrada");
}else{
    console.log("Houve um problema, tente novamente mais tarde.");
}