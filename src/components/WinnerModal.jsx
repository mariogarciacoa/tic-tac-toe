import { Square } from './square.jsx'

export function WinnerModal ({ winner, resetGame, startAgain }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Gano: '

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        {
          winner && <header className='win'><Square>{winner}</Square></header>
        }
        <footer>
          <button className='btn-next-round' onClick={startAgain}>Siguiente ronda</button>
          <button className='btn-new-game' onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
