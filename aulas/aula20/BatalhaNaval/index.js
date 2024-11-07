let tabuleiro = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function setarNavios() {
    tabuleiro[5][6] = 1 //coloca navio na na posicao 4, 5
    tabuleiro[2][3] = 1
    tabuleiro[2][4] = 1
    tabuleiro[2][6] = 1
    tabuleiro[2][7] = 1

}

let quantidadeNavios = 0
for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++)
        quantidadeNavios += tabuleiro[i][j]
}

let escolhaLinha = Number(prompt("Escolha a linha que deseja atacar!"))
let escolhaColuna = Number(prompt("Escolha a coluna que deseja atacar!"))

function verificaPosicao(linha, coluna) {
    if (tabuleiro[linha][coluna] === 1){
        console.log('Acertou')
    }
    else if()
    else
}