
export function ScoreBoard ({ status, score, player }) {
  const className = `square ${status || ''}`

  return (
    <div>
      <div className={className}> {score} </div>
    </div>

  )
}
