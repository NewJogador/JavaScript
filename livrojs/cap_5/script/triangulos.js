const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
        resp.innerText = `Não será possível forma um triangulo com essas medidas`
        return
    } else if (ladoA == ladoB && ladoA != ladoC || ladoB == ladoC && ladoB != ladoA || ladoC == ladoA && ladoC != ladoB){
        resp.innerText = `Lados podem formar um triângulo Isósceles`
        return
    } else if (ladoA == ladoB && ladoA == ladoC){
        resp.innerText = `Lados podem formar um triângulo Equilátero`
        return
    } else {
        resp.innerText = `Lados podem formar um triângulo Escaleno`
        return
    }
})