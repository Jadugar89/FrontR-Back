

namespace ServerSide.TicTacToe
{
    public class TicTacToe
    {
        
        private string[,] _board;

        public string[,] Board
        {
            get { return _board; }
        }

        public TicTacToe(string[] board)
        {
            this._board = ConvertArrayToMatrix(board);
        }


        private string[,] ConvertArrayToMatrix(string[] board)
        {
            if(board == null)
            {
                throw new ArgumentNullException("array", "Array cannot be null");
            }
            if(board.Length == 0)
            {
                throw new ArgumentException("Array cannot be empty", "array");
            }

            var matrix = new string[3,3];
            int i= 0;
            for(int j = 0; j <3; j++)
            {
                matrix[j, 0] = board[i];
                matrix[j,1] = board[i + 1];
                matrix[j,2] = board[i + 2];
                i += 3;
            }
            return matrix;
        }
        public int calculateWinner(int depth)
        {
            for(int i = 0; i < 3; i++)
            {
                if(CheckNonEmptyStringsAndCompare(Board[i,0],Board[i, 1],Board[i, 2]))
                {
                    if(Board[i, 0] =="X")
                    {
                        return -10+ depth;
                    }
                    else
                    {
                        return 10 - depth;
                    }
                    
                }
                if(CheckNonEmptyStringsAndCompare(Board[0,i],Board[1, i],Board[2, i]))
                {
                    if (Board[0, i] == "X")
                    {
                        return -10+ depth;
                    }
                    else
                    {
                        return 10- depth;
                    }
                }
            }
            if (CheckNonEmptyStringsAndCompare(Board[0, 0], Board[1, 1], Board[2, 2]) ||
                CheckNonEmptyStringsAndCompare(Board[0, 2], Board[1, 1], Board[2, 0]))
            {
                if (Board[0, 0] == "X" || (Board[0, 2] =="X"))
                {
                    return -10+ depth;
                }
                else
                {
                    return 10-depth;
                }
            }

               return 0;
        }
        public bool isMovePossible()
        {
            
            for (int i = 0; i < 3; i++)
            {
                foreach (var item in Board)
                {
                    if(String.IsNullOrEmpty(item))
                    {
                        return true;
                    } 
                }
            }
            return false;
        }

        private bool CheckNonEmptyStringsAndCompare(params string[] strings)
        {
            if(strings.All(s => string.IsNullOrEmpty(s)))
            {
                return false;
            }
            else
            {
                if(strings.Distinct().Count()==1)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            } 
        }

    }
}
