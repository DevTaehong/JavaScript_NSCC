import React from 'react';
import {Board} from './Board';
import {MoveCounter} from './MoveCounter';

export class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null),
          }
        ],
        stepNumber: 0,
        xIsNext: true,
        moveX: 0,
        moveO: 0,
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";

      if(this.state.xIsNext){
        this.state.moveX++;
      } else {this.state.moveO++}

      this.setState({
        history: history.concat([
          {
            squares: squares,
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
     
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });

      if(step === 0) {
        this.setState({
          moveX: 0,
          moveO: 0
        })
      } else if(step === 1) {
        this.setState({
          moveX: 1,
          moveO: 0
        })
      }else if(step === 2) {
        this.setState({
          moveX: 1,
          moveO: 1
        })
      }else if(step === 3) {
        this.setState({
          moveX: 2,
          moveO: 1
        })
      }else if(step === 4) {
        this.setState({
          moveX: 2,
          moveO: 2
        })
      }else if(step === 5) {
        this.setState({
          moveX: 3,
          moveO: 2
        })
      }else if(step === 6) {
        this.setState({
          moveX: 3,
          moveO: 3
        })
      }else if(step === 7) {
        this.setState({
          moveX: 4,
          moveO: 3
        })
      }else if(step === 8) {
        this.setState({
          moveX: 4,
          moveO: 4
        })
      }else if(step === 9) {
        this.setState({
          moveX: 5,
          moveO: 4,
        });
      }
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
          
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner.winner;
      } else if(!current.squares.includes(null)){
        status = "Game Result: Draw";
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
              winner={winner && winner.winningSquares}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
          <MoveCounter moveX={this.state.moveX} moveO={this.state.moveO}/>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          winningSquares: lines[i]
        }
      }
    }
    return null;
  }