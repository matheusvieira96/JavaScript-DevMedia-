import converteCelsiusParaFahrenheit from './converteTemperatura.js';
import retornaStatusTemperaturaFahrenheit from './statusTemperatura.js';

let celsius = 45;

let resultado = converteCelsiusParaFahrenheit(celsius);
let statusResultado = retornaStatusTemperaturaFahrenheit(resultado);

console.log(resultado+'ºF');
console.log(statusResultado);