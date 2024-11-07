let matriz = [
    [1,2,3],
    [4,5,6]
]

console.log(matriz[0][1])

let matriz2 = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

console.log(matriz2[0][1]) //valor 20
console.log(matriz2[2][1]) //valor 80
console.log(matriz2[1][0]) // valor 40

let matriz3 = []

matriz3[0] = [1,2,3]
matriz3[1] = [4,5,6]
matriz3[2] = [7,8,9]

let matrixJV = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

matrixJV[1][2] = 1

console.log(matrixJV[0][0],matrixJV[0][1],matrixJV[0][2])

console.log(matrixJV[1][0],matrixJV[1][1],matrixJV[1][2])

console.log(matrixJV[2][0],matrixJV[2][1],matrixJV[2][2])

let matriz4 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0; i<matriz4.length;i++){

    for(let j=0; j<matriz4[i].length;j++){

        console.log(matriz4[i][j])
    }
}
let soma = 0
for(let i=0; i<matriz4.length;i++){
    
    for(let j=0; j<matriz4[i].length;j++){
        soma += matriz4[i][j]
        if(matriz4[i][j] == 9)
        {
            console.log("o número é 9")
        }
    }
}
console.log(soma)

for(let i=0; i<matriz4.length;i++){
    
    for(let j=0; j<matriz4[i].length;j++){
        
        matriz4[i][j]*=2
        console.log(matriz4[i][j])
    }
}
