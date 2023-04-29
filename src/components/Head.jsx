export function Head ({ resetGame, name }) {
  return (
    <>
      <h1>{name}</h1>
      <button className='btn-reset-game' onClick={resetGame}>Reset Game</button>
    </>
  )
}
