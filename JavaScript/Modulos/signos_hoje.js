import colecao_signos from './dados.js';
import retorna_signo from './funcoes.js';

let data_app = new Date("2020-10-28");

const signo_de_hoje = retorna_signo(colecao_signos,data_app);

console.log("O signo de hoje é: "+ signo_de_hoje);

