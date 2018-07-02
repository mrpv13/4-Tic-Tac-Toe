!function () {
//Global Variables
let gameSession = {};
let boardHTML = $('.boxes');
let hover = 'box-hover-1';

//Game session class
  class TicTacToe {
    constructor(player1, player2) {
      this.playerTurn = 1;
      this.player1 = player1;
      this.player2 = player2;
      this.board = [];

      $('.boxes').innerHTML = boardHTML;
      this.board = $('.boxes').children();
      for (let i = 0; i < this.board.length; i++) {
        $(this.board[i]).attr("id", `${i}`);
        $(this.board[i]).click(function () {
          gameSession.turn(i);
          if (hover == 'box-hover-1') {
            hover = 'box-hover-1';
          }else {
            hover = 'box-hover-2';
          }
        });
        $(this.board[i]).hover(function () {
          gameSession.hover(i);
        });
      }
    }

    hover(i){
      $(this.board[i]).toggleClass(hover);
    }

    turn(i) {
      $(this.board[i]).toggleClass("disabled");

      switch (this.playerTurn) {
        case 1:
          $(this.board[i]).toggleClass('box-filled-1');
          this.playerTurn = 2;
          break;
        case 2:
          $(this.board[i]).toggleClass('box-filled-2');
          this.playerTurn = 1;
          break;
      }

/*
      if (this.playerTurn === 1) {
        this.playerTurn = 2;
      }else {
        this.playerTurn = 1;
      }
*/
      $('#player1').toggleClass('active');
      $('#player2').toggleClass('active');

      this.winCheck();
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

//starts a new game session
  const startGame = () => {
    $('#start').hide('clip', 1000);
    $('#finish').hide('clip', 1000);
    $('#board').delay(1000).show('puff', 1000);

    gameSession = new TicTacToe("Player 1","Player 2");
    $('#player1').toggleClass('active');

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
