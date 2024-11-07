/*let condicao1 = true
if(condicao1){
    //acao
    console.log("Exibiu condicao1")
}
let condicao2 = false
if(condicao2){
    //acao
    console.log("Exibiu condicao2")
}*/

/*
const num1 = Number(prompt("Digite o primeiro número"))

const num2 = Number(prompt("Digite o segundo número"))

if(num1===num2){
    console.log("Os números são iguais")
}
if(num1!==num2){
    console.log("Os números são diferentes")
}*/

/*
let condicao = true

if(condicao){
    console.log("A condicao é verdadeira")
}else{
    console.log("A condicao é falsa")
}
    */
/*
const num1 = Number(prompt("Digite o primeiro número"))

const num2 = Number(prompt("Digite o segundo número"))

if(num1===num2){
    console.log("Os números são iguais")
}else{
    console.log("Os números são diferentes")
}*/
/*
let condicao1 = false
let condicao2 = false

if(condicao1){
    console.log("condicao1 verdadeiro")
}else if(condicao2){
        console.log("condicao2 é verdadeira")
}else{
    console.log("Entrou no else")
}*/
/*
const num1 = Number(prompt("Digite o primeiro número"))

const num2 = Number(prompt("Digite o segundo número"))

if(num1===num2){
    console.log("Os números são iguais")
}else if(num1>num2){
    console.log("O número1 é maior que o número 2")
}else{
    console.log("O número 1 é menor que o número 2")
}*/
/*
let paisDeOrigem = prompt("Digite o país de Origem")

switch(paisDeOrigem){
    case "Brasil":
        console.log("Brasileiro")
        break
    case "EUA":
        console.log("Norte Americano")
        break
    case "Inglaterra":
        console.log("Inglês")
        break
    default :
        console.log("Nenhuma nacionalidade encontrada")
        break
}*/

/*
const pokemon = prompt("Digite o nome do pokemon")

switch(pokemon){
    case "Bulbasaur":
        console.log("O pokemon escolhido foi o Bulbasaur do tipo Planta Veneno")
        break
    case "Charmander":
        console.log("O pokemon escolhido foi o Charmander do tipo Fogo")
        break
    case "Squirtle":
        console.log("O pokemon escolhido foi o Squirtle do tipo Água")
        break
    default:
        console.log("Nome de pokemon inicial inválido")
        break
}*/
/*
const aluna = prompt("Digite o nome")

switch(aluna){
    case "Hermione":
        console.log("Grifinória")
        break
    case "Ana":
        console.log("Lufa-lufa")
        break
    case "Luna":
        console.log("Corvinal")
        break
    case "Narcisa":
        console.log("Sonserina")
        break
    default:
        console.log("Nome não encontrado")
        break
}*/
/*
let condicao1 = true
let condicao2 = false

if(condicao1 && condicao2){
    console.log("As duas condicoes são verdadeiras")
}else{
    console.log("Alguma condicao é falsa")
}
if(condicao1 || condicao2){
    console.log("Alguma das condicoes é verdadeira")
}else{
    console.log("todas são falsas")
}

if(!condicao1){
    console.log("A condicao1 é falsa")
}else{
    console.log("A condicao1 é verdadeira")
}*/
/*
let condicao1 = false

if(condicao1){
    //ação se a condicao for verdadeira
    console.log("Entrou no if 1!")
}

let condicao2 = false

if(condicao2){
    console.log("Entrou no if 2!")
}else if (condicao1){
    console.log("Entrou no else if!")
}else{
    console.log("Entrou no else!")
}*/
/*
let  paisDeOrigem = prompt("Digite seu país de origem")

switch(paisDeOrigem){
    case 'Brasil':
        console.log("Brasileiro")
        break
    case 'Argentino':
        console.log("Argentino")
        break
    case 'EUA':
        console.log("Norte Americano")
        break
    case 'Inglaterra':
        console.log("Inglês")
        break
    default :
        console.log("Nacionalidade não encontrada")
        break
}*/

const tipoFilme = prompt("Genero do filme")

const valorIngresso = Number(prompt("Qual o preço do ingresso?"))

if(tipoFilme === 'fantasia'&& valorIngresso <=15){
    console.log('Bom filme!')
}else{
    console.log("Escolha outro filme!")
}
