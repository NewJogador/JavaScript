const prompt = require("prompt-sync")()

const vCondutor = Number(prompt("Qual a velocidade do condutor? "))
const vPermitida = Number(prompt("Qual a velocidade do permitida? "))

let aux
/*
if (vCondutor > vPermitida + (vPermitida*.2)){
    aux = "Multa Grave!"
    console.log(`${aux}`)
} else if (vCondutor > vPermitida){
    aux = "Multa Leve!"
    console.log(`${aux}`)
} else {
    aux = "Sem Multa!"
    console.log(`${aux}`)
}
*/
aux = vCondutor > vPermitida +(vPermitida*.2)? "Multa Grave!" : vCondutor > vPermitida? "Multa Leve!" : "Sem Multa!"
console.log(aux)

