using Xunit;
using ServerSide.TicTacToe;
using System.Collections.Generic;
using System;

namespace ServerSide_Test
{
    public class TicTacToe_Test
    {

        [Theory]
        [MemberData(nameof(GetArray2D))]
        public void CheckConvert2(string[] arr, string[,] expected)
        {
            TicTacToe ticTacToe = new TicTacToe(arr);
            Assert.Equal(expected, ticTacToe.Board);
        }

        public static IEnumerable<object[]> GetArray2D()
        {
            yield return new object[]
            {
            new string[]{ "X", "", "X", "", "O", "O", "", "", "" },
            new string[,] {{ "X", "", "X" },
                           { "", "O", "O"},
                            {"", "", ""} }
            };
            yield return new object[]
            {
            new string[] { "X", "X", "", "", "O", "O", "", "", "" },
            new string[,] {{ "X", "X", "" },
                           { "", "O", "O"},
                            {"", "", ""} }
            };
        }

        [Theory]
        [MemberData(nameof(WinnerData))]
        public void calculateWinnerTest(string[] arr, int expected,int depth=0)
        {
            TicTacToe ticTacToe = new TicTacToe(arr);

            Assert.Equal(expected, ticTacToe.calculateWinner(depth));
        }

        [Theory]
        [MemberData(nameof(fullBoard))]
        public void IsPossibleMove(string[] arr, bool expected)
        {
            TicTacToe ticTacToe = new TicTacToe(arr);

            Assert.Equal(expected, ticTacToe.isMovePossible());
        }

        public static IEnumerable<object[]> WinnerData()
        {
            yield return new object[]
            {
               new string[] { "X", "X", "X", "", "O", "O", "", "", "" },
               -8,
               2
            };
            yield return new object[]
            {
               new string[] { "X", "", "", "", "O", "O", "", "X", "" },
               0
            };
            yield return new object[]
            {
               new string[] { "X", "O", "", "", "X", "O", "", "", "X" },
               -10
            };
            yield return new object[]
            {
               new string[] { "X", "O", "", "X", "O", "", "X", "", "" },
               -10
            };
            yield return new object[]
            {
               new string[] { "", "O", "X", "", "X", "O", "X", "", "" },
               -10
            };
            yield return new object[]
            {
               new string[] { "O", "", "X", "O", "X", "X", "O", "", "" },
               10
            };
            yield return new object[]
            {
               new string[] { "O", "", "X", "O", "X", "X", "O", "", "" },
               8,
               2
            };
            yield return new object[]
            {
               new string[] { "", "", "", "", "", "", "", "", "" },
               0
            };

        }

        public static IEnumerable<object[]> fullBoard()
        {
            yield return new object[]
            {
               new string[] { "X", "X", "X", "", "O", "O", "", "", "" },
               true
            };
            yield return new object[]
            {
               new string[] { "X", "", "", "X", "O", "O", "", "", "" },
               true
            };
            yield return new object[]
            {
               new string[] { "X", "", "", "X", "O", "O", "X", "O", "X" },
               true
            };
            yield return new object[]
            {
               new string[] { "X", "O", "X", "X", "O", "O", "O", "X", "O" },
               false
            };
            yield return new object[]
            {
               new string[] { "", "", "", "", "", "", "", "", "" },
               true
            };
        }
    }
}