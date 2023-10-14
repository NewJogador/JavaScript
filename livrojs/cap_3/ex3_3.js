const prompt = require("prompt-sync")()   // adiciona o pacote ao programa
const quadrienio = Number(prompt(`Quantos anos o funcionário trabalhou?`))
const salario = Number(prompt(`Qual o salário desse funcionário?`))
const direito = quadrienio/4
const  porcentagem = direito*.01
const porcentagem2 = porcentagem*100
const valor = salario + (salario*porcentagem)

console.log(`O funcionário tem direito a ${porcentagem2.toFixed(1)}% quadriênio`)
console.log(`Tendo direito ao salário final de ${valor.toFixed(2)}`)