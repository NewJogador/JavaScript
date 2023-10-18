const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" //variável para a resposta em string | iniciando
let numContas = 0 //variável para o contador de contas | iniciando
let valTotal = 0 //variável para o acumulador de contas | iniciando

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)
    numContas++ //contador
    valTotal = valTotal + valor //acumulador
    resposta = resposta + descricao +"-R$: " +valor.toFixed(2) +"n"
    resp1.innerTExt = `${resposta} --------------------------------`
    resp2.innerText = `${numContas} Conta(s)- Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})