import Chat from '../component/chat/chat';
import Tictactoe from '../component/tic-tac-toe/tictactoe';
import '../css/Games.css';
function Games () {
    return ( 
        <div className="games">
            <div className="Container"><Tictactoe/></div>
            <div className="Container"> <Chat/></div>
        </div>
     );
}

export default Games;