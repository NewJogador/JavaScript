const prompt = require("prompt-sync")()

const valor = Number(prompt("Digite um número: "))
/*
if (valor%2 == 0){
    console.log(`O numero ${valor} é par!`)
    return
} else {
    console.log(`O numero ${valor} é impar!`)
    return
}*/

console.log("O numero digitado é " +(valor%2 == 0? "par" : "impar") +"!")
