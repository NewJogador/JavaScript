const frm = document.querySelector("form")
const resp = document.querySelector("#resp")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const saque = Number(frm.inSaque.value)

    const num1 = Math.floor(saque/100)
    const num2 = Math.floor((saque%100)/50)
    const num3 = Math.floor(((saque%100)%50)/10)

    if (num1 > 0){
        resp.innerText = `Notas de R$ 100: ${num1}`
    }
    if (num2 > 0){
        resp1.innerText = `Notas de R$ 50: ${num2}`
    }
    if (num3 > 0){
        resp2.innerText = `Notas de R$ 10: ${num3}`
    }
})