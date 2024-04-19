import { convert } from "./dependencies.js"

const convertir = document.getElementById("btn-con")
convertir.addEventListener("click",()=>{
    const input = document.getElementById("valor").value
    const outputExpresion = document.getElementById("prefija")
    

    let salidas = convert.convert(input)
  

    
    outputExpresion.innerText = "Expresión prefija: " + salidas[1]
    
})