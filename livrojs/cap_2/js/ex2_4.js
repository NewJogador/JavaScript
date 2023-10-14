const frm = document.querySelector("form")
const resp = document.querySelector(".outConta")

frm.addEventListener("submit",(e)=>{
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const conta = (consumo/1000)*quilo

    resp.innerText = `Valor a pagar R$ ${conta.toFixed(2)}`
    
    e.preventDefault()
})

