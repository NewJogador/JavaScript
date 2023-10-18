const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const numero = Number(frm.inValor.value)
    let resposta = `Entre ${numero} e 1: `
/*
    for (let i = numero -1; i > 0; i--){
        resposta = resposta + ", " + i
        //será executado quantas vezes forem necessárias, ao final do for a variável está pronta
    }

    resp.innerText = resposta +"."*/
    let i = numero
    while (i > 0){
        resposta = resposta  +i + ", "
        i--
    }

    resp.innerText = resposta +"."
})

