
import { ScoreBoard } from './ScoreBoard'
import { Square } from './square'

export function Board ({ board, updateBoard, score }) {
  return (
    <div className='panel'>
      <ScoreBoard status={score.X > score.O ? 'winning' : ''} score={score.X} />
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>
      <ScoreBoard status={score.O > score.X ? 'winning' : ''} score={score.O} />
    </div>
  )
}
