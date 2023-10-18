const frm = document.querySelector("form")
const resp1 = document.querySelector(".outResp1")
const resp2 = document.querySelector(".outResp2")

frm.addEventListener("submit",(e)=>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promocao = preco*.5
    const valorTotal = preco*2.5

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorTotal}`
    resp2.innerText = `O 3º produto custa apenas R$: ${promocao}`

    e.preventDefault()
})