!function () {
//Global Variables
let gameSession = {};
let boardHTML = $('.boxes').clone();

//Game session class
  class TicTacToe {
    constructor(player1, player2) {
      this.playerTurn = 1;
      this.player1 = player1;
      this.player2 = player2;
      this.board = [];
      this.count = 0;
      $('#player1').removeClass('active');
      $('#player1').addClass('active');
      $('#player2').removeClass('active');

      //resets the board and adds the click and hover functionility to the game
      $('.boxes').replaceWith(boardHTML.clone());
      this.board = $('.boxes').children();
      for (let i = 0; i < this.board.length; i++) {
        $(this.board[i]).attr("id", `${i}`);
        $(this.board[i]).click(function () {
          gameSession.turn(i);
        }).hover(function () {
          if (gameSession.playerTurn === 1) {
            $(gameSession.board[i]).addClass('box-hover-1');
          }else {
            $(gameSession.board[i]).addClass('box-hover-2');
          }
        }, function (){
          if (gameSession.playerTurn === 1) {
            $(gameSession.board[i]).removeClass('box-hover-1');
          }else {
            $(gameSession.board[i]).removeClass('box-hover-2');
          }
        });
      }
    }

    //turn function that colors the tile based on the player turn and checks for win condition
    turn(i) {
      $(this.board[i]).toggleClass("disabled");
      switch (this.playerTurn) {
        case 1:
          $(this.board[i]).addClass('box-filled-1');
          $(this.board[i]).removeClass('box-filled-2');
          $(this.board[i]).removeClass('box-hover-2');
          $(this.board[i]).removeClass('box-hover-1');
          break;
        case 2:
          $(this.board[i]).addClass('box-filled-2');
          $(this.board[i]).removeClass('box-filled-1');
          $(this.board[i]).removeClass('box-hover-1');
          $(this.board[i]).removeClass('box-hover-2');
          break;
      }

      this.count++;
      this.winCheck(i);

      $('#player1').toggleClass('active');
      $('#player2').toggleClass('active');

      if (this.playerTurn === 1) {
        this.playerTurn = 2;
      }else {
        this.playerTurn = 1;
      }
    }

    //win check function, if any of the conditions are met it ends the game
    winCheck(i){
      if (this.playerTurn === 1) {
        if ($(this.board[0]).hasClass('box-filled-1') && $(this.board[1]).hasClass('box-filled-1') && $(this.board[2]).hasClass('box-filled-1')) {
          endGame(this.player1);
        }
        if ($(this.board[0]).hasClass('box-filled-1') && $(this.board[3]).hasClass('box-filled-1') && $(this.board[6]).hasClass('box-filled-1')) {
          endGame(this.player1);
        }
        if ($(this.board[0]).hasClass('box-filled-1') && $(this.board[4]).hasClass('box-filled-1') && $(this.board[8]).hasClass('box-filled-1')) {
          endGame(this.player1);
        }
        if ($(this.board[1]).hasClass('box-filled-1') && $(this.board[4]).hasClass('box-filled-1') && $(this.board[7]).hasClass('box-filled-1')) {
          endGame(this.player1);
        }
        if ($(this.board[2]).hasClass('box-filled-1') && $(this.board[5]).hasClass('box-filled-1') && $(this.board[8]).hasClass('box-filled-1')) {
          endGame(this.player1);
        }
        if ($(this.board[3]).hasClass('box-filled-1') && $(this.board[4]).hasClass('box-filled-1') && $(this.board[5]).hasClass('box-filled-1')) {
          endGame(this.player1);
        }
        if ($(this.board[6]).hasClass('box-filled-1') && $(this.board[7]).hasClass('box-filled-1') && $(this.board[8]).hasClass('box-filled-1')) {
          endGame(this.player1);
        }
        if ($(this.board[2]).hasClass('box-filled-1') && $(this.board[4]).hasClass('box-filled-1') && $(this.board[6]).hasClass('box-filled-1')) {
          endGame(this.player1);
        }
      }else {
        if ($(this.board[0]).hasClass('box-filled-2') && $(this.board[1]).hasClass('box-filled-2') && $(this.board[2]).hasClass('box-filled-2')) {
          endGame(this.player2);
        }
        if ($(this.board[0]).hasClass('box-filled-2') && $(this.board[3]).hasClass('box-filled-2') && $(this.board[6]).hasClass('box-filled-2')) {
          endGame(this.player2);
        }
        if ($(this.board[0]).hasClass('box-filled-2') && $(this.board[4]).hasClass('box-filled-2') && $(this.board[8]).hasClass('box-filled-2')) {
          endGame(this.player2);
        }
        if ($(this.board[1]).hasClass('box-filled-2') && $(this.board[4]).hasClass('box-filled-2') && $(this.board[7]).hasClass('box-filled-2')) {
          endGame(this.player2);
        }
        if ($(this.board[2]).hasClass('box-filled-2') && $(this.board[5]).hasClass('box-filled-2') && $(this.board[8]).hasClass('box-filled-2')) {
          endGame(this.player2);
        }
        if ($(this.board[3]).hasClass('box-filled-2') && $(this.board[4]).hasClass('box-filled-2') && $(this.board[5]).hasClass('box-filled-2')) {
          endGame(this.player2);
        }
        if ($(this.board[6]).hasClass('box-filled-2') && $(this.board[7]).hasClass('box-filled-2') && $(this.board[8]).hasClass('box-filled-2')) {
          endGame(this.player2);
        }
        if ($(this.board[2]).hasClass('box-filled-2') && $(this.board[4]).hasClass('box-filled-2') && $(this.board[6]).hasClass('box-filled-2')) {
          endGame(this.player2);
        }
      }
      if(this.count === 9){
        endGame('tie');
      }
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
  }

//function that runs when game ends, displays correct winner/tie
  const endGame = (winner) => {
    $('#board').hide('fade', 2000);
    $('#finish').delay(2000).show('puff', 1000).removeClass('screen-win-tie screen-win-one screen-win-two');

    if (winner === 'tie') {
      $('#finish').addClass('screen-win-tie');
      $('.message').html('Tie game!');
      return;
    }
    if (gameSession.playerTurn === 1) {
      $('#finish').addClass('screen-win-one');
      $('.message').html(`${gameSession.player1} wins!`);
    }else {
      $('#finish').addClass('screen-win-two');
      $('.message').html(`${gameSession.player2} wins!`);
    }
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
