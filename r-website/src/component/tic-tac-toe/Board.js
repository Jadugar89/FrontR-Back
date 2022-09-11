import React from 'react';
import Square from './Square';
import '../../css/board.css';
import {calculateWinner} from './helpFunction';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.StatusFun= this.props.StatusFun.bind(this)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: props.xIsNext,
      isWinner:false,
      AIMode: props.AIMode,
    };
  }

  handleClick(i) {    
    const squares = this.state.squares.slice();    
    if (calculateWinner(squares) || squares[i]) {   
      return;    
    }
    squares[i] =  this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares,
                  xIsNext: !this.state.xIsNext}
      );  
    }


    renderSquare(i) {
      return <Square value={this.state.squares[i]}
                     onClick={() => this.handleClick(i)}
      />;
    }
  
    render() {

      const winner = calculateWinner(this.state.squares);    
      let status;    
      if (winner && winner!== -1) {     
         status = 'Winner: ' + winner;
      }
      else
      {
        if(winner=== -1)
        {
          status = 'No one is a Winner! ';
        }
        else
        {
          status =<p>Next Player {(this.state.xIsNext ? 'X' : 'O')}</p>;
        }
        
      }
      let EndGameBtn= null;
      if(winner)
      {
        EndGameBtn  = <button onClick={()=>this.StatusFun(false)}>End Game </button>
      }
      
       
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          {EndGameBtn}
        </div>
      );
    }
  }
  export default Board;