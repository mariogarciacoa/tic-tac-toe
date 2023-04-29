import './App.css'
import { useState } from 'react'
import { Turn } from './components/TurnSection'
import { Head } from './components/Head'
import { SCORE, TURNS } from './constants.jsx'
import { checkWinnerFrom, checkEndGame } from './logic/checkBoard.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import confetti from 'canvas-confetti'
import { Board } from './components/Board'
import { saveGameToStorage, getBoardFromStorage, getTurnFromStorage, getScoreFromStorage, saveScoreToStorage, resetBoardInLocalStorage, resetScoreInLocalStorage } from './logic/storage'

function App () {
  const [board, setBoard] = useState(getBoardFromStorage())
  const [turn, setTurn] = useState(getTurnFromStorage(TURNS.X))
  const [winner, setWinner] = useState(null)
  const [score, setScore] = useState(getScoreFromStorage(SCORE))

  const updateBoard = (index) => {
    // Si ya tiene algo o hay un ganador no actualiza el tablero
    if (board[index] || winner) return
    // actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // actualiza el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage(newBoard, newTurn)

    // revisamos si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)

    if (newWinner) {
      setScore({ ...score, [newWinner]: score[newWinner] + 1 })
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setScore(SCORE)
    resetBoardInLocalStorage()
    resetScoreInLocalStorage()
  }

  const startAgain = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    saveScoreToStorage(score)
    resetBoardInLocalStorage()
  }

  return (
    <main className='board'>
      <Head resetGame={resetGame} name='Tic-Tac-Toe' />
      <Board board={board} score={score} updateBoard={updateBoard} />
      <Turn turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} startAgain={startAgain} />
    </main>
  )
}

export default App
