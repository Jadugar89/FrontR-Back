import Chat from '../component/chat';
import Tictactoe from '../component/tic-tac-toe/tictactoe';
import '../css/Games.css';
function Games () {
    return ( 
        <div className="games">
            <Tictactoe/>
            <Chat/>
        </div>
     );
}

export default Games;