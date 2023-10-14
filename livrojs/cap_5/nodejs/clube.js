const prompt = require("prompt-sync")() // é criado um prompt para a leitura de dados com o node

const pessoas = Number(prompt("Entrada para quantas pessoas?")) 
const entrada = pessoas*20 //definido a entrada
const peixe = Number(prompt("Quantos peixes pegaram?"))
let valor //valor pode assumir duas formas por isso não pode ser uma constânte

if (pessoas >= peixe){
    valor = entrada
} else {
    valor = entrada + (peixe - pessoas)*12
}

console.log(`O valor a pagar é ${valor.toFixed(2)}`)