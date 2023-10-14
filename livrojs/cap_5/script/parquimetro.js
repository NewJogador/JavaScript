const frm = document.querySelector("form")
const resp = document.querySelector("#resp")
const resp2 = document.querySelector("#resp2")


frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)
    let troco

    if (tempo <= 30 && valor > 1){
        troco = valor - 1
        resp.innerText = `Tempo gasto ${tempo}`
        resp2.innerText = `Troco ${troco.toFixed(2)}`
        return
    } else if (tempo <= 60 && valor >= 1.75){
        troco = valor - 1.75
        resp.innerText = `Tempo gasto ${tempo}`
        resp2.innerText = `Troco ${troco.toFixed(2)}`
        return
    } else if (tempo <= 120 && valor >= 3.00){
        troco = valor - 3.00
        resp.innerText = `Tempo gasto ${tempo}`
        resp2.innerText = `Troco ${troco.toFixed(2)}`
        return
    } else if (tempo > 120 && valor > (Math.ceil(tempo/30)*1)){
        troco = valor - (Math.ceil(tempo/30)*1)
        resp.innerText = `Tempo gasto ${tempo}`
        resp2.innerText = `Troco ${troco.toFixed(2)}`
        return
    } else {
        resp.innerText = `Valor insuficiente`
        return
    }

})


