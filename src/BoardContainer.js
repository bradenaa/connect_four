import React, { Component } from 'react';
import ColumnComponent from './ColumnComponent'
import InfoComponent from './InfoComponent'

class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      boardState: [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
      ],
      type: {
        "0": "none",
        "1": "black",
        "2": "red",
      },
      winner: '',
      turn: 'black',
    }
    this.onBoxClick = this.onBoxClick.bind(this);
  }

  onBoxClick(e) {
    // if game over do nothing...
    if (this.state.gameOver) return

    const split = e.target.id.split('-')
    const [col, row] = split;

    this.setState(prevState => {
      // change the box to the appropriate value
      const newBoard = prevState.boardState.map(row => row.slice())
      const val = prevState.turn === 'black' ? 1 : 2;
      
      let index = 0;
      let value = newBoard[col][index]
      while (value === 0) {
        index += 1
        value = newBoard[col][index]
      }
      newBoard[col][index - 1] = val

      let nextTurn = prevState.turn;

      if (index !== 0) nextTurn = prevState.turn === 'black' ? 'red' : 'black'


      // Check if the game is over
      // TODO: check only the col of interest
      // TODO: break up logic into other file
      let isGameOver = prevState.gameOver;

      for (let i = 0; i < newBoard.length; i += 1) {
        // check cols
        const column = newBoard[i];

        for (let j = 0; j < column.length - 3; j += 1) {
          const slice = column.slice(j, j + 4)

          const isWinner = slice.every((val, i, arr) => val === arr[0])

          if (isWinner && slice[0] !== 0) {
            isGameOver = true
            break
          }

        }

        // check rows
        for (let k = 0; k < newBoard[0].length; k += 1) {
          const row = [];

          for (let l = 0; l < newBoard.length; l += 1){
            row.push(newBoard[l][k])
          }

          for (let j = 0; j < row.length - 3; j += 1) {
            const slice = row.slice(j, j + 4)

            const isWinner = slice.every((val, i, arr) => val === arr[0])

            if (isWinner && slice[0] !== 0) {
              isGameOver = true
              break
            }

          }
        }

        // check diagonals
        

      }

      return {
        ...prevState,
        boardState: newBoard,
        turn: nextTurn,
        gameOver: isGameOver,
        winner: isGameOver === true ? prevState.turn : ''
      }
    })

  }

  render() {

    const { boardState, turn, gameOver, type, winner } = this.state;

    return (
      <div className="board_container">
        Board
        <ColumnComponent
          boardState={boardState}
          type={type}
          onBoxClick={this.onBoxClick}
        />
        <InfoComponent
          turn={turn}
          winner={winner}
        />
      </div>
    )
  }
}

export default BoardContainer