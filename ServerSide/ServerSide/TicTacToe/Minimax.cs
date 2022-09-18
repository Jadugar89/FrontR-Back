namespace ServerSide.TicTacToe
{
    public class Minimax
    {
        private TicTacToe _ticTacToe;

        public Minimax(string[] board)
        {
            _ticTacToe= new TicTacToe(board);
        }
        public int isWinner()
        {
         return _ticTacToe.calculateWinner(0);
        }
        public bool isMovePossible()
        {
            return _ticTacToe.isMovePossible();
        }

        public int BestMove()
        {
            int bestVal = int.MinValue;
            int bestMove = -1;
            if (_ticTacToe.calculateWinner(0) != 0)
            {
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        if (string.IsNullOrEmpty(_ticTacToe.Board[i, j]))
                        {
                            _ticTacToe.Board[i, j] = "O";
                            int moveVal = MiniMaxFun(_ticTacToe.Board, 0, false);
                            _ticTacToe.Board[i, j] = String.Empty;

                            if (moveVal > bestVal)
                            {
                                bestMove = 3 * i + j;
                                bestVal = moveVal;
                            }
                        }
                    }
                }
            }
            return bestMove;
        }

       private int MiniMaxFun(string[,] board,int depth,bool isMaximizingPlayer)
       {
            
            int score=_ticTacToe.calculateWinner(depth);
            if (score!=0)
            {
                return score;
            }

            if(!_ticTacToe.isMovePossible())
            {
                return 0;
            }

            if (isMaximizingPlayer)
            { 
                int bestVal = int.MinValue;
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        if (string.IsNullOrEmpty(_ticTacToe.Board[i,j]))
                        {
                            _ticTacToe.Board[i, j] = "O";
                            bestVal = Math.Max(bestVal, MiniMaxFun(board, depth + 1, !isMaximizingPlayer));
                            _ticTacToe.Board[i, j] = String.Empty;
                        }
                    }
                }
                return bestVal;
            }
            else
            {
                int bestVal = int.MaxValue;
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < 3; j++)
                    {
                        if (string.IsNullOrEmpty(_ticTacToe.Board[i, j]))
                        {
                            _ticTacToe.Board[i, j] = "X";
                            bestVal = Math.Min(bestVal, MiniMaxFun(board, depth + 1, !isMaximizingPlayer));
                            _ticTacToe.Board[i, j] = String.Empty;
                        }
                    }
                }
                return bestVal;
            }
        }

    }
}
