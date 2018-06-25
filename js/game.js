!function () {
//Global Variables
let gameSession = {};
let boardHTML = $('.boxes');

//Game session class
  class TicTacToe {
    constructor(player1, player2) {
      this.playerTurn = 1;
      this.player1 = player1;
      this.player2 = player2;
      this.board = this.newBoard();
    }

    newBoard() {
      let board = [];
      $('.boxes').innerHTML = boardHTML;
      board = $('.boxes').children();
      for (var i = 0; i < board.length; i++) {
        $(board[i]).attr("id", `${i}`);
      }
      console.log(board);
      return board;
    }
  }

//Commands to run when page first loads or when a game restarts
  const startUp = () => {
    $('#board').hide();
  }

  const startGame = () => {
    $('#start').hide('clip', 1000);
    $('#board').delay(1000).show('puff', 1000);

    gameSession = new TicTacToe("Player 1","Player 2");
    console.log(gameSession);
  }

  $('#start a').click(function () {
    startGame();
  });

  $('.boxes').each().click(function (e) {
    //gameSession.turn(e.target);
  });

  startUp();
}();
