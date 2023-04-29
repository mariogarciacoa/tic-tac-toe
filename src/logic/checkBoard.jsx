import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  // Revisamos todas las combinaciones ganadoras con el tablero
  for (const combos of WINNER_COMBOS) {
    const [a, b, c] = combos

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay valores null en el tablero
  return newBoard.every((square) => square !== null)
}
