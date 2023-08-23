let frase = prompt("Insira uma frase").toUpperCase()
frase = frase.replaceAll("O", "I")
let tamanho = frase.length
console.log(frase)


//correção sor

const frase2 = prompt("Escreva uma frase")
const fraseMaiuscula = frase2.toUpperCase()
const fraseLingual = fraseMaiuscula.replaceAll("O", "I")
const fraseTamanho = fraseMaiuscula.length
console.log("Frase original", frase2)
console.log("Frase em letras maiúsculas", fraseMAiscula)
console.log("Frase na lingua do I:", fraseLingual)
console.log("Tamanho da frase", fraseTamanho)
