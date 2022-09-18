import React from 'react';
import Square from './Square';
import { HubConnectionBuilder } from "@microsoft/signalr";
import '../../css/board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.StatusFun= this.props.StatusFun.bind(this)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      isWinner:false,
      winner:null,
      AIMode: props.AIMode,
      connect:null,
    };
  }
  componentDidMount()
  {
    let xIsNextRand= this.Rand()===1 ? true : false;
    this.setState({xIsNext:xIsNextRand});
   
      const connect = new HubConnectionBuilder()
      .withUrl("https://localhost:7047/hubs/TicTacToe")
      .withAutomaticReconnect()
      .build();

      this.setState({connect:connect});
       connect.start().then(()=>{
        console.log("Conntected with Server");

        if(!this.state.xIsNext && this.state.AIMode)
          {
          this.calculateMoveForAI();
          }
      });
      
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    if(this.state.AIMode && prevState.xIsNext && !this.state.xIsNext && !this.state.isWinner)
    {
      this.calculateMoveForAI();
    }
    if(prevState.squares!==this.state.squares)
    {
      this.CheckWinner();
      this.setState({xIsNext:!this.state.xIsNext});    
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
    if (this.state.isWinner || squares[i]!==null) {   
      return;    
    }
    squares[i] =  this.state.xIsNext ? 'X' : 'O';
                  this.setState({squares: squares}); 
                 
    }

    calculateMoveForAI()
    {
      if(this.state.connect)
      {
        if(this.state.connect._connectionStarted && !this.state.isWinner)
        {
            console.log("Funkcja Wysylania Status"+this.state.connect.state);
            const TicTacToe_Message = {
            board: this.state.squares
            };
        try {
           this.state.connect.send("SendMessage", TicTacToe_Message).then(()=>{
            this.state.connect.on("ReceiveMessage", (mess) => {
              const squares = this.state.squares.slice();  
              squares[mess]='O';
              this.setState({squares: squares});
            });
          });
        }
        catch(e)
        {
          console.log(e);
        }   
        }
      }
    }
    async CheckWinner()
    {
      if(this.state.connect._connectionStarted)
      {
        const TicTacToe_Message = {
          board: this.state.squares
      };
  
        await this.state.connect.send("isWinner",TicTacToe_Message).then(()=>{
          this.state.connect.on("isWinner",(mess)=>{
  
            if(mess.isWinner)
            {
              let Winner = 0;
              if( mess.winner>0)
              {
                Winner="O";
              }
              if( mess.winner<0)
              {
                Winner="X";
              }
  
              this.setState({isWinner:mess.isWinner,
                            winner:Winner}
             );
            }
          })});
        }
    }

    renderSquare(i) {
      let disabled= false;
      if(this.state.AIMode)
      {
        disabled=!this.state.xIsNext;
      }
      return <Square value={this.state.squares[i]}
                     onClick={() => this.handleClick(i)}
                     disabled={disabled}
      />;
    }
  
    render() {

       
      let status;    
      if (this.state.isWinner && this.state.winner!== 0 ) {   
         
         status = 'Winner: ' + this.state.winner
      }
      else
      {
        if(this.state.isWinner && this.state.winner===0)
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
      if(this.state.isWinner)
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