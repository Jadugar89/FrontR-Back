using Microsoft.AspNetCore.SignalR;
using ServerSide.Models;
using ServerSide.TicTacToe;


namespace ServerSide.SignalR_Hub
{
    public class TicTacToeHub:Hub 
    {
        public async Task SendMessage(TicTacToe_Message message)
        {

            await Clients.All.SendAsync("ReceiveMessage", GetNextMove(message.board));
                  
        }
        public async Task isWinner(TicTacToe_Message message)
        {
            await Clients.All.SendAsync("isWinner", isWinner(message.board));
        }

        private int GetNextMove(string[] board)
        {
            return new Minimax(board).BestMove();
        }
        private TicTacToe_Responde isWinner(string[] board)
        {
            Minimax minimax = new Minimax(board);

            TicTacToe_Responde ticTacToe_Responde = new TicTacToe_Responde();
            ticTacToe_Responde.Winner = minimax.isWinner();
            if(minimax.isMovePossible())
            {
                if(minimax.isWinner()==0)
                {
                    ticTacToe_Responde.isWinner = false;
                }
                else
                {
                    ticTacToe_Responde.isWinner = true;
                }
            }
            else
            {
                ticTacToe_Responde.isWinner = true;
            }
            return ticTacToe_Responde;
        }
    }
}
