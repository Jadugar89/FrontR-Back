import React from 'react';
import Board from './Board';
import ToggleSwitch from '../ToogleSwitch';
import '../../css/tictactoe.css';



class Tictactoe extends React.Component {

  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.OnToogleChange = this.OnToogleChange.bind(this);
    this.StatusFun= this.StatusFun.bind(this);
    this.state = {isStarted: false,
                  AIMode:false,
    };
  }
  handleStartClick() {

    this.setState({isStarted: true});
    
  }
  StatusFun(value){
    this.setState({isStarted: value});
    console.log("Status fun "+ this.state.isStarted);
    
  }
  OnToogleChange(event)
  {
    this.setState({AIMode:!this.state.AIMode})
  }


    render() {
      let GameStarted;
      let BoardReady;
      if(this.state.isStarted)
      {
        GameStarted=  <div><p>Game is Started!!!</p></div>;
        BoardReady=<Board StatusFun={this.StatusFun}
                          AIMode={this.state.AIMode}
        />
      }
      else
      {
        GameStarted=<div><button className="StartGame" onClick={this.handleStartClick}>Start Game</button></div>;
        BoardReady=<div><p>Wait for start</p></div>
      }
    
      return (

        <div className="game">
          <div className="game-info">
           {GameStarted}
           <ToggleSwitch label="Player AI"
                         OnChangeHandler={this.OnToogleChange} 
                         disabled={this.state.isStarted} 
                         checked={this.state.AIMode}/>
          </div>
          <div className="game-board">
           {BoardReady}
          </div>
        </div>
      );
    }
  }
  export default Tictactoe;