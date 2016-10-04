$(document).ready(function () {
  var $body = $('body')
  var $header = $('header')
  var $wordPanel = $('.wordPanel')
  var $colorPanel = $('.colorPanel')
  var $timerPanel = $('.timer')
  var $startButton = $('.start')
  var $restartButton = $('.restart')

  var colorArr = ['red', 'blue', 'yellow', 'green']
  var wordArr = ['green', 'purple', 'grey', 'black', 'purple', 'black', 'silver', 'yellow']
  var timerID
  var mseconds = 0
  $restartButton.hide()
  $wordPanel.hide()

  function shuffle (array) {
    var i = 0
    var j = 0
    var temp = null
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }
  function startClick() {
    generateWord()
    generateColor()
    // timerStart()
    $('.colorPanel').on('click', '.box', matcher)
    $startButton.hide()
    $restartButton.show()
    $wordPanel.show()
    $colorPanel.show()
    $restartButton.on('click', restartClick)
  }
  function restartClick() {
    // timerStop()
    $restartButton.hide()
    $startButton.show()
    $wordPanel.children().remove()
    $colorPanel.children().remove()
    $wordPanel.children().hide()
    $colorPanel.children().hide()
  }
  function generateWord() {
    var shuffleWord = shuffle(wordArr)
    var $wordChildren = $wordPanel.children()
    $wordChildren.append('<div class="word red">' + shuffleWord[0] + '</div>')
  }
  function generateColor() {
    var shuffleColor = shuffle(colorArr)
    for (var i = 0; i < shuffleColor.length; i++) {
      $colorPanel.append('<div class="box ' + shuffleColor[i] + '"></div>')
    }
  }
  function randomWord() {
    var shuffleWord = shuffle(wordArr)
    var $wordChildren = $wordPanel.children()
    $wordChildren.text(shuffleWord[0])
  }
  function randomColor() {
    var shuffleColor = shuffle(colorArr)
    for (var i = 0; i < shuffleColor.length; i++) {
      $colorPanel.children().remove()
      $colorPanel.append('<div class="box ' + shuffleColor[i] + '"></div>')
    }
  }
  function matcher() {
    var $wordChildren = $wordPanel.children()
    if ($(this).hasClass('red') === $wordChildren.hasClass('red')) {
      randomWord()
      randomColor()
    }
  }
  function timerCount () {
    // var head1 = body.querySelector('#timer')
    $timerPanel.text('Time elapsed: ' + mseconds + 'ms')
    mseconds += 100
    // parseFloat(seconds.toFixed(2))
  }
  function timerStart () {
    timerID = setInterval(timerCount, 100)
    // parseFloat(timerID.toFixed(2))
  }
  function timerStop() {
    clearInterval(timerID)
  }
  $startButton.on('click', startClick)
})
