import { useState } from 'react'
import './App.css'

// DEFINIR LOS TURNOS
const TURNS= {
  X: "X",
  O: "O"
}

// DEFINIR TODAS LAS COMBINACIONES GANADORAS
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// DIBUJAR LOS CUADROS
const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index);
  }
  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}


function App() {

  const [board, setBoard] = useState(Array(9).fill(null)) // ESTADO DEL TABLERO

  const [turn, setTurn] = useState(TURNS.X) // ESTADO DE LOS TURNOS

  const [winner, setWinner] = useState(null) // ESTADO PARA DEFINIR GANADOR

  // REVISANDO SI HAY GANADOR CON LAS COMBINACIONES
  const checkWinner = (boardCheck) => {
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardCheck[a] && boardCheck[a] === boardCheck[b] && boardCheck[a] === boardCheck[c]
      ) {
        return boardCheck[a]
      }
    }
    return null
  }

  //EMPEZAR DE NUEVO
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

  }

  // ACTUALIZAR EL TABLERO
  const updateBoard = (index) => {
    // SI EN EL TABLERO HAY ALGO HACER UN RETURN
    if (board[index] || winner) return

    // COPIAR Y ACTUALIZAR EL TABLERO
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // MANEJAR LOS TURNOS DE X u O
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //VER SI HAY GANADOR
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <>
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}>
              
                {board[index]}
              </Square>
              )
            }
          )
        }
      </section>
      <section className='turn'>
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <button onClick={resetGame}>Restart</button>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'Gano:'
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
    </>
  )
}

export default App
