const resp = document.querySelector(".resp")
let numeros = ""

for (let i = 1; i<=20; i = i+1){
    numeros = numeros + i +"\n"
}

resp.innerText = numeros