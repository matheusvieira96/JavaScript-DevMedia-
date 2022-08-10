// Para saber a diferença de fuso horário do sistema para o UTC utilizamos o método .getTimezoneOffset()

const dataAtual = new Date();

console.log( dataAtual.getTime() );
console.log( dataAtual.getTimezoneOffset() );
console.log( dataAtual.valueOf() );


