/*function calculaArea(largura,altura){
    const area = largura * altura
    console.log(area)
}

calculaArea(2,3)
calculaArea(5,4)

function imprimirOlaMundo(){
    console.log("Olá mundo")
}

imprimirOlaMundo()
imprimirOlaMundo()
imprimirOlaMundo()



function imprimirNome(nome){
    console.log("Bem vindo: ", nome)
}

imprimirNome("Rebeca")
imprimirNome("João")*/
/*
function calcularArea(largura,altura){
    const resultadoArea = largura * altura
    return resultadoArea
}

let area = calcularArea(2,5)
console.log("A area é:", area)

console.log("A area é:", calcularArea(2,5))*/
/*
function somaNumeros(numero1, numero2){
    const soma = numero1+numero2
    return soma
}
let resultado = somaNumeros(2,5)

console.log("A soma é:", resultado)

const numerosOriginal = [233,43,634,64,27,6]

function primeiroeUltimo(arrayNumeros){
    const novoArray = []
    novoArray.push(arrayNumeros[0])
    novoArray.push(arrayNumeros[arrayNumeros.length-1])
    return novoArray
}

console.log(primeiroeUltimo(numerosOriginal))
*/
/*
const calculaArea = function(largura,altura){
    const soma = largura * altura
    return soma
}

const resultado = calculaArea(2,5)
*/
/*
function imprimirNome(nome){
    console.log("Bem vindo: ", nome)
}

imprimirNome("Rebeca")
imprimirNome("João")*/
/*
const imprimirNome = function(nome){
    console.log("Bem vindo: ", nome)
}

imprimirNome("Rebeca")*/
/*
const calculaArea = (largura,altura) => {
    const resultado = largura * altura
    return resultado
}

const area = calculaArea(2,7)
console.log("A area é:", area)*/
//2. Crie uma função que dentro dela tem dois números e some os números e imprima o resultado a frase (“A soma é:”, resultado)
const somaNumeros = function(numero1, numero2){
    return numero1+numero2
}
console.log("A soma é:",somaNumeros(2,5))

//3. Crie uma função que dentro dela tenha um número e dobre o número e imprima o resultado ex.:(o dobro de 5 é 10);

const dobraNumero = (numero) => {
    return numero*2
}

const numero = Number(prompt("Digite o número"))
console.log("O dobro de: ", numero,"é ", dobraNumero(numero))