//O códico deve imprimir false 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

//O Códico deve imprimir false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

//O códico deve imprimir true 
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

//O códico deve imprimir boolean
console.log("d. ", typeof resultado)