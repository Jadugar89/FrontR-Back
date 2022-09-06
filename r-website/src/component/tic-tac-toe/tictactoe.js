import React from 'react';
import Board from './Board';
import '../../css/tictactoe.css';



class Tictactoe extends React.Component {

  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.Rand=this.Rand.bind(this);
    this.state = {isStarted: false};
  }
  handleStartClick() {
    this.setState({isStarted: true});
  }
  Rand()
  {
    return Math.floor(Math.random()*2+1);
  }


    render() {
      let GameStarted;
      if(this.state.isStarted)
      {
        GameStarted=  <div><p>Game is Started!!!</p></div>;
      }
      else
      {
        GameStarted=<div><button className="StartGame" onClick={this.handleStartClick}>Start Game</button></div>;
      }
    
      return (

        <div className="game">
          <div className="game-info">
           {GameStarted}
          </div>
          <div className="game-board">
            <Board player={this.Rand()} />
          </div>
        </div>
      );
    }
  }
  export default Tictactoe;