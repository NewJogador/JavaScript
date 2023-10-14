const prompt = require("prompt-sync")()
const nome = prompt("Nome do aluno: ")
const nota1 = Number(prompt("Qual a primeira nota dele? "))
const nota2 = Number(prompt("Qual a segunda nota dele? "))

const media = (nota1+nota2)/2

if(media >= 7){
    console.log(`O aluno ${nome} foi aprovado! Sua media foi ${media.toFixed(1)}`)
}else{
    console.log(`O aluno ${nome} foi reprovado! Sua media foi ${media.toFixed(1)}`)
}