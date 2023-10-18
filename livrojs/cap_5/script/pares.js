let num //será acessada fora do bloco do.. while

do {
    num = Number(prompt("Número: "))
// isNaN() -> Not-a-Number
    if (num == 0 || isNaN(num)) {
        alert("Digite um número válido...")
    }
} while (num == 0 || isNaN(num))

let pares = `Pares entre 1 e ${num}: `

for (let i = 2; i < num; i = i + 2) {
    pares = pares + i + ", "
}
alert(pares +"12.")