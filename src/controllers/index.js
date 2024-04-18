//import { conversion } from "../models/conversion.js"
import { conversion } from "./dependencies.js "

const convertir = document.getElementById("btn-con")
convertir.addEventListener("click",()=>{
    const input = document.getElementById("valor").value
    const outputExpresion = document.getElementById("prefija")
    

    let salidas = conversion.conversion(input)
    
    outputExpresion.innerText = "Expresión prefija: " + salidas[1]
    
})