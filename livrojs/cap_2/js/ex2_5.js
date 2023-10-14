const frm = document.querySelector("form")
const resp1 = document.querySelector(".outPromocao")

frm.addEventListener("submit",(e)=>{
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const promocao = Math.floor(preco*2)

    resp1.innerText = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`

    e.preventDefault()
})

