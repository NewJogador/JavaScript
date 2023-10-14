const prompt = require("prompt-sync")()
const pesoKg = Number(prompt(`Quantos Kg de ração resta?`))
const consumo = Number(prompt(`Quando gramas de ração será usado diariamente?`))
const duracao = Math.floor(pesoKg*1000)/consumo //quantos dias irá durar
const sobra = (pesoKg*1000)%consumo //quanto irá sobrar

console.log(`A ração irá durar ${duracao.toFixed(0)} dias`)
console.log(`Sobrará apenas ${sobra.toFixed(0)} gramas`)