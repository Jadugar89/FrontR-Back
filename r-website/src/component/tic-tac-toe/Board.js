import React from 'react';
import Square from './Square';
import { HubConnectionBuilder } from "@microsoft/signalr";
import '../../css/board.css';
import {calculateWinner} from './helpFunction';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.StatusFun= this.props.StatusFun.bind(this)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      isWinner:false,
      AIMode: props.AIMode,
      connect:null,
    };
  }
  componentDidMount()
  {
    let xIsNextRand= this.Rand()===1 ? true : false;
    this.setState({xIsNext:xIsNextRand});
    if(this.state.AIMode)
    {
      const connect = new HubConnectionBuilder()
      .withUrl("https://localhost:7047/hubs/TicTacToe")
      .withAutomaticReconnect()
      .build();

    
 
      this.setState({connect:connect});
       connect.start().then(()=>{
        console.log("Conntected with Server");
        if(!this.state.xIsNext)
        {
          this.calculateMoveForAI();
        }
      });
    }

  }
  componentDidUpdate(prevProps, prevState, snapshot)
  {
    if(this.state.AIMode && prevState.xIsNext && !this.state.xIsNext && !this.state.isWinner)
          {
            this.calculateMoveForAI();
          }
    
  }


  componentWillUnmount()
  {
   if(this.state.connect)
    {
      this.state.connect.stop();
      console.log( this.state.connect.state);
    }
  }
  Rand()
  {
    return Math.floor(Math.random()*2+1);
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

    calculateMoveForAI()
    {
      if(this.state.connect)
      {
        if(this.state.connect._connectionStarted)
        {
          console.log("Funkcja Wysylania Status"+this.state.connect.state);
          const TicTacToe_Message = {
            board: this.state.squares
        };
        try {
           this.state.connect.send("SendMessage", TicTacToe_Message);
        }
        catch(e)
        {
          console.log(e);
        }
          

           this.state.connect.on("ReceiveMessage", (mess) => {
            const squares = this.state.squares.slice();  
            squares[mess]='O';
            this.setState({squares: squares,
              xIsNext: !this.state.xIsNext})
        });
        }
      }

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
          if(this.state.AIMode)
          {
            if(this.state.xIsNext)
            {
              status =<p>Your Move</p>;
            }
            else
            {
             
              status =<p>Wait for Player AI</p>;
            }
            
          }
          else
          {
            status =<p>Next Player {(this.state.xIsNext ? 'X' : 'O')}</p>;  
          }
         
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