const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let numDivisores = 0 //variável para o acumulador

    for (let i=1; i<=num; i++){
        if (num%i==0) {
            numDivisores++ //acumulador para saber quantos divisores possui
        }
    }

    if (numDivisores==2) {
        resp.innerText = `${num} É primo` //2 divisores é primo
    } else {
        resp.innerText = `${num} Não é primo` //mais de 2 náo é primo
    }
})
