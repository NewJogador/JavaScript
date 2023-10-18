const prompt = require("prompt-sync")()

const ladoA = Number(prompt("Digite o primeiro lado: "))
const ladoB = Number(prompt("Digite o segundo lado: "))
const ladoC = Number(prompt("Digite o terceiro lado: "))

if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
    console.log(`Não é possível formar um triângulo com essas medidas`)
    return
} else if (ladoA == ladoB && ladoA != ladoC || ladoB == ladoC && ladoB != ladoA || ladoA == ladoC && ladoA != ladoB){
    console.log(`Lados podem formar um triângulo Isósceles`)
    return
} else if (ladoA == ladoB && ladoB == ladoC){
    console.log(`Lados podem formar um triângulo Equilátero`)
    return
} else {
    console.log(`Lados podem formar um triângulo Escaleno`)
    return
}



