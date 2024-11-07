const palavras = ["javascript", "programacao", "computador", "tecnologia", "desenvolvimento"];
const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

let tentativasRestantes = 6;
let palavraOculta = "_".repeat(palavraEscolhida.length).split(""); // Cria um array com underscores para as letras
let venceu = false;

console.log("Bem-vindo ao Jogo da Forca!");

while (tentativasRestantes > 0) {
  console.log(`\nPalavra: ${palavraOculta.join(" ")}`);

  // Verifica se o jogador venceu
  venceu = true;
  for (let i = 0; i < palavraOculta.length; i++) {
    if (palavraOculta[i] === "_") {
      venceu = false;
      break;
    }
  }
  if (venceu) break; // Sai do loop se todas as letras forem adivinhadas

  let letra = prompt("Adivinhe uma letra: ").toLowerCase();
  let letraCorreta = false;

  // Verifica a letra sem includes
  for (let i = 0; i < palavraEscolhida.length; i++) {
    if (palavraEscolhida[i] === letra) {
      palavraOculta[i] = letra;
      letraCorreta = true;
    }
  }

  if (!letraCorreta) {
    tentativasRestantes--;
    console.log(`Letra incorreta! Tentativas restantes: ${tentativasRestantes}`);
  }
}

if (venceu) {
  console.log(`\nParabéns, você ganhou! A palavra era: ${palavraEscolhida}`);
} else {
  console.log(`\nVocê perdeu! A palavra era: ${palavraEscolhida}`);
}