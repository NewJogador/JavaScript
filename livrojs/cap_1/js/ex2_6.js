const frm = document.querySelector("form")
const resp = document.querySelector(".outPagamento")

frm.addEventListener("submit",(e)=>{
    const custo = Number(frm.inCusto.value)
    const uso = Number(frm.inUso.value)

    const pagamento = Math.ceil(uso/15)*custo

    resp.innerText = `Valor a Pagar R$ ${pagamento.toFixed(2)}`

    e.preventDefault()
})

