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
      $('.boxes').innerHTML = boardHTML;

      $('.box').click(function (e) {
        //gameSession.turn(e.target);
      });

      let board = [];
      board = $('.boxes').children();

      /*
      for (let i = 0; i < board.length; i++) {
        $(board[i]).click(gameSession.turn());
      }
      */
      //console.log(board);
      return board;
    }

    turn(i) {

      $(gameSession.board[i]).toggleClass("disabled");

      switch (gameSession.playerTurn) {
        case 1:
          $(gameSession.board[i]).toggleClass('box-filled-1');
          break;
        case 2:
          $(gameSession.board[i]).toggleClass('box-filled-2');
          break;
      }

      if (gameSession.playerTurn === 1) {
        gameSession.playerTurn = 2;
      }else {
        gameSession.playerTurn = 1;
      }

      $('#player1').toggleClass('active');
      $('#player2').toggleClass('active');

      gameSession.winCheck();
    }

    winCheck(){
      console.log("test win check");
    }
  }

//Commands to run when page first loads or when a game restarts
  const startUp = () => {
    $('#finish').hide();
    $('#board').hide();
  }

//
  const startGame = () => {
    $('#start').hide('clip', 1000);
    $('#finish').hide('clip', 1000);
    $('#board').delay(1000).show('puff', 1000);

    gameSession = new TicTacToe("Player 1","Player 2");
    $('#player1').toggleClass('active');

    for (let i = 0; i < gameSession.board.length; i++) {
      $(gameSession.board[i]).attr("id", `${i}`);
      console.log(gameSession.board[i]);
      $(gameSession.board[i]).click(function () {
        gameSession.turn(i);
      });
    }

    //console.log(gameSession);
  }

  const endGame = () => {
    $('#board').hide();
    $('#finish').show();
  }

//seperate functions to bind the start games button on the page
  $('#start a').click(function () {
    startGame();
  });

  $('#finish a').click(function () {
    startGame();
  });

  startUp();
}();
