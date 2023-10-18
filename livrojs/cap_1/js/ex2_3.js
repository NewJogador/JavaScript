const frm = document.querySelector("form")
const resp1 = document.querySelector(".resp1")
const resp2 = document.querySelector(".resp2")
const resp3 = document.querySelector(".resp3")

frm.addEventListener("submit",(e)=>{
    const modelo = frm.inModelo.value
    const financiado = frm.inValor.value

    const entrada = financiado*.5
    const parcelas = entrada/12
    const desconto = financiado*.85

    resp1.innerText = `A oferta para o modelo ${modelo} corresponde:`
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)} + 12x de R$ ${parcelas.toFixed(2)}`
    resp3.innerText = `Ou R$ ${desconto.toFixed(2)} a vista!`

    e.preventDefault()
})