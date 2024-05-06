import './index.css'
import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner } from './utils/checkWinner'
import { WinnerModal } from './components/WinnerModal'
import confetti from 'canvas-confetti'

function App () {
  const [board, setBoard] = useState(JSON.parse(localStorage.getItem('board')) || Array(9).fill(null))
  const [turn, setTurn] = useState(JSON.parse(localStorage.getItem('turn')) || TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Save to localStorage
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('turn', JSON.stringify(newTurn))

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    if (!newWinner && !newBoard.includes(null)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
