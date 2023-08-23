
const frase = prompt("Escreva uma frase")

const fraseMaiuscula = frase.toUpperCase()
const fraseLinguaI = fraseMaiuscula.replaceAll("O", "I")
const fraseTamanho = fraseMaiuscula.length

console.log("Frase original:", frase)
console.log("Frase em letras maiúsculas:", fraseMaiuscula)
console.log("Frase na língua do I:", fraseLinguaI)
console.log("Tamanho da frase:", fraseTamanho)
