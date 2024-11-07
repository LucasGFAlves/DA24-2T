/*const professor = {
    nome: 'Lucas',
    idade: 32,
    altura: 1.75,
    email: 'lucas@gmail.com',
    tarefas: ['Dar aula','Responder Dúvidas','Ler Texto'],
    contarPiadas:function(){
        console.log("É pa vê ou pa comê?")
    },
    'e imprimir':"frase"
}

console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])
console.log(professor['e imprimir'])
console.log("A tarefa do prof é:",professor.tarefas[1])*/
/*
professor.nome = 'Leo'
professor["email"] = 'leo@gmail.com'

console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])*/
/*
const donoDoPet = {
    nome:'Lucas',
    idade: 32,
    pet:{
        nome:'Daenerys',
        raca:'Vira-lata',
        idade: 7
    }
}

console.log(donoDoPet.pet.nome)*/
/*
const curso ={
    nome:'front End Noturno',
    linguagens:['JS','CSS', 'HTML']
}
console.log(curso.linguagens[0])
curso.numeroEstudantes = 50
curso['numeroProfessores'] = 10

console.log(curso.numeroEstudantes)
console.log(curso.numeroProfessores)*/
/*
const professores = [
    {nome:'Lucas',idade:32,modulo:1},
    {nome:'Leo', idade:29, modulo:2},
    {nome:'Mika',idade:29,modulo:3}
]

console.log(professores[2].nome)*/

const usuario = {
    nome: 'Prof',
    idade: 27,
    email:'prof@senac.com.br',
    cidade: 'São Leopoldo'
}

const novoUsuario = {
    ...usuario,
    nome:'Lucas',
    idade:32,
    cidade:'Canoas'
}

delete novoUsuario.email

console.log(novoUsuario)

const nomeProfs = ['Lucas', 'Leo', 'Mika']

let novaListaProfs = [...nomeProfs]


console.log("O nome do prof é:",novaListaProfs[1])