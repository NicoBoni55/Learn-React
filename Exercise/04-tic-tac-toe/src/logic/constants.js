// DEFINIR LOS TURNOS
export const TURNS= {
    X: "❌",
    O: "🔵"
  }
  
  // DEFINIR TODAS LAS COMBINACIONES GANADORAS
export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

// REVISANDO SI HAY GANADOR CON LAS COMBINACIONES
export const checkWinner = (boardCheck) => {
  for(const combo of WINNER_COMBOS){
    const [a, b, c] = combo
    if (
      boardCheck[a] &&
      boardCheck[a] === boardCheck[b] &&
      boardCheck[a] === boardCheck[c]
    ) {
      return boardCheck[a]
    }
  }
  return null
}

// SI NO QUEDAN ESPACIOS VACIOS EN EL TABLERO SE DECLARA UN EMPATE
export const checkGameEnd = (newBoard) => {
  for (const square of newBoard) {
    if (square === null) {
      return false
    }
  }
  return true
}