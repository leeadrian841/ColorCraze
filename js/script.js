$(document).ready(function() {
  var $body = $('body')
  var $middle = $('.middle')
  var $bottom = $('.bottom')
  var $start = $('.start')
  var $restart = $('.restart')

  var player1 = 0
  var player2 = 0
  var player1current = 0
  var player2current = 0
  var currentPlayer = 0

  $start.on('click', startGame)
  $restart.on('click', restartGame)

  var startGame = function() {

    var $restart = $('<button type="button" class="btn btn-danger restart">Restart</button>')
    $bottom.append($restart)


  //   function playTurn() {
  //
  //   }
  //   function isGameOver() {
  //
  //   }
  //   function whoWon() {
  //     if (player1current === player2current) {
  //       return 3 // Draw
  //       alert ('This game is a draw! Please play again.')
  //     } if (player1current > player2current) {
  //       return 1 // Player 1 wins
  //       alert ('Player 1 wins!')
  //     } else {
  //       return 2 // Player 2 wins
  //       alert ('Player 2 wins!')
  //     }
  //   }
  }
  function restartGame() {

  }
})
