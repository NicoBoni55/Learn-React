import { useState } from 'react'
import confeti from 'canvas-confetti'
import './App.css'
import { TURNS, checkWinner, checkGameEnd } from './logic/constants'
import { Square } from './components/Square'
import { WinnerModel } from './components/WinnerModel'

// DIBUJAR LOS CUADROS
  <Square />

function App() {

  const [board, setBoard] = useState(Array(9).fill(null)) // ESTADO DEL TABLERO

  const [turn, setTurn] = useState(TURNS.X) // ESTADO DE LOS TURNOS

  const [winner, setWinner] = useState(null) // ESTADO PARA DEFINIR GANADOR
 

  //EMPEZAR DE NUEVO -> resetear todos los valores del estado a su valor inicial
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
      for (let index = 0; index <= 3; index++) {
        confeti()
     }
    }
    else if (checkGameEnd(newBoard)) {
     setWinner(false) 
    }
  }

  return (
    <>
    <main className='board'>
      <h1>Tic Tac Toe
      <img src="./src/assets/tic-tac-toe-h1.svg" alt="tic-tac-toe-logo"></img>
      </h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return(
              <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}>
                {_}
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
      {/* Que se muestra en la pantalla si ganas o empatas */}
     <WinnerModel resetGame={resetGame} winner={winner} />
    </main>
    </>
  )
}

export default App
