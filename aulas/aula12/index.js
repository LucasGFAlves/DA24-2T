/*let i = 0;

while(i<=10){
    console.log("O número é:",i)
    i++;
}*/
/*
let estomago = 0

while(estomago < 100){
    console.log("Quero comer mais coxinhas",estomago)
    estomago = estomago + 1
}*/
/*
let numero = 10
let soma = 0

while(numero !== 0){
    numero = Number(prompt("Digite um numero"))
    soma += numero
    console.log("O número digitado foi: ", numero)
}
console.log("O valor total foi: ", soma)*/

/*

let c = 1

do{
    console.log("O valor do contador é:", c)
    c++
}while(c <= 6)*/
/*
let numeros = [11,15,18,14,12,13]
let soma = 0

for(let i=0; i<6;i++){
    if(numeros[i]%2 === 0){
        soma += numeros[i]
    }
}
console.log("A soma dos números pares é: ",soma)*/
/*
const numeros = [14,67,89,15,23]

for(let numero of numeros){
    console.log(numero)
}*/

/*
const palavras = ["Oi","sumido", "tudo","bem?","Saudades"]
let frase=''

for(let palavra of palavras){
    frase += palavra+" "
}
console.log(frase)*/


/*
let numeros = [11,15,18,14,12,13]
let soma = 0

for(let numero of numeros){
    if(numero%2 === 0){
        soma += numero
    }
}
console.log("A soma dos números pares é: ",soma)*/

const palavras = ["Palavras","são","uma","inesgotável","fonte","de","magia"]

let palavrasMaisLongas = [palavras[0]]

for(let palavra of palavras){
    if(palavrasMaisLongas[0].length<palavra.length){
        palavrasMaisLongas.push(palavra)
    }
}
console.log(palavrasMaisLongas)