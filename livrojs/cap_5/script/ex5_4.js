const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const raiz = Number(frm.inNumber.value)
    
    const result = Math.sqrt(raiz)
    
    if (Number.isInteger(result)){
        resp.innerText = `a raiz quadrada de ${raiz} e ${result}`
    } else {
        resp.innerText = `o numero não possuí raiz exata`
    }
})