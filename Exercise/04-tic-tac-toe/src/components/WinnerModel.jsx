import { Square } from "./Square"

export function WinnerModel ({winner, resetGame}) {
    if (winner === null) return null

    const defineWinner = winner === false ? 'Draw' : 'Win!'

    return(
        <section className='winner'>
          <div className='text'>
            <h2>
              {defineWinner}
            </h2>
            <header className='win'>
              {winner && <Square>{winner}</Square>}
              {winner === false && <Square>😕</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Play Again</button>
            </footer>
          </div>
        </section>
    )
}