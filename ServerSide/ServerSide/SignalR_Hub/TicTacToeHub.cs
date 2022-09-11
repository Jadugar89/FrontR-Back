using Microsoft.AspNetCore.SignalR;
using ServerSide.Models;


namespace ServerSide.SignalR_Hub
{
    public class TicTacToeHub:Hub 
    {
        public async Task SendMessage(TicTacToe_Message message)
        {
            
            await Clients.All.SendAsync("ReceiveMessage", GetNextMove(message.board));
                  
        }
        private int GetNextMove(string[] board)
        {
           
            int Result = 0;
            if (board == null ||  board.All(x => x != null))
            {

                Result = -1;
            }
            else
            {
                Random rnd = new Random();
                for (int i = 0; i < board.Length; i++)
                {
                    Result = rnd.Next(0, 8);
                    if (board[Result] == null)
                    {
                        break;
                    }
                }

            }
            return Result;
        }
        

    }
}
