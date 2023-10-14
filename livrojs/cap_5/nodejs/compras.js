const prompt = require("prompt-sync")()

const valor = Number(prompt("Qual o valor da compra?"))
const aux = Math.floor(valor/20) // usando uma variável auxiliar

// a parcela deve ser no mínimo 20
// no máximo 6 parcelas 
let parcelas
if (aux == 0) { /*se o valor < 20*/
    parcelas = 1
} else if ( aux > 6) { /*se o valor > 120*/
    parcelas = 6
} else { /*se o valor >= 20 */
    parcelas = aux
}

const cadaParcela = valor/parcelas

console.log(`Você deve pagar ${parcelas} parcelas de R$ ${cadaParcela.toFixed(2)} cada`)