$(document).ready(function() {
  var $body = $('body')
  var $start = $('.start')
  var $restart = $('.restart')
  var $middle = $('.middle')

  var player1 = 0
  var player2 = 0
  var player1current = 0
  var player2current = 0
  var currentPlayer = 0

  $start.on('click', start)
  $restart.on('click', restart)

  function start() {

    var QuestionsArr = ['3 + 3 = 10']
    function Questions() {
      var $para = $('<p>')
      $middle.append($para)
      $para.text(QuestionsArr)
    }
    Questions()
    function numberOfQuestions() {

    }
    function currentQuestion() {

    }
    function correctAnswer() {

    }
    function numberOfChoices() {

    }
    function playTurn() {

    }
    function isGameOver() {

    }
    function whoWon() {
      if (player1current === player2current) {
        return 3 // Draw
        alert ('This game is a draw! Please play again.')
      } if (player1current > player2current) {
        return 1 // Player 1 wins
        alert ('Player 1 wins!')
      } else {
        return 2 // Player 2 wins
        alert ('Player 2 wins!')
      }
    }
  }
  function restart() {

  }
})
