import Chat from '../component/chat';
import Tictactoe from '../component/tic-tac-toe/tictactoe';
import '../css/Games.css';
function Games () {
    return ( 
        <div className="games">
            <div><Tictactoe/></div>
            <div> <Chat/></div>
        </div>
     );
}

export default Games;