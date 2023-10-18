const prompt = require("prompt-sync")()

const valor = Number(prompt("Digite um número de 100 a 999: "))

if (valor >=100 && valor < 999){
    const num1 = Math.floor(valor/100)
    let aux = valor%100 
    const num2 = Math.floor(aux/10)
    const num3 = aux%10

    console.log(`seu número ao contrário é ${num3}${num2}${num1}`)
} else {
    console.log(`Digite um número válido!`)
    return
}


