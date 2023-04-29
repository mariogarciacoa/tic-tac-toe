export const saveGameToStorage = (board, turn) => {
  // guardar la partida en localstorage
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const saveScoreToStorage = (score) => {
  // guardar la partida en localstorage
  window.localStorage.setItem('score', JSON.stringify(score))
}

export const resetBoardInLocalStorage = () => {
  // Borra los datos de la partida del localStorage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const resetScoreInLocalStorage = () => {
  // Borra los datos de la partida del localStorage
  window.localStorage.removeItem('score')
}

export const getBoardFromStorage = () => {
  const boardFromLocalStorage = window.localStorage.getItem('board')
  return boardFromLocalStorage
    ? JSON.parse(boardFromLocalStorage)
    : Array(9).fill(null)
}

export const getTurnFromStorage = (turn) => {
  const turnFromLocalStorage = window.localStorage.getItem('turn')
  return turnFromLocalStorage || turn
}

export const getScoreFromStorage = (score) => {
  const scoreFromLocalStorage = window.localStorage.getItem('score')
  return scoreFromLocalStorage
    ? JSON.parse(scoreFromLocalStorage)
    : score
}
