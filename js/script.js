$(document).ready(function () {
  var $body = $('body')
  var $header = $('header')
  var $wordPanel = $('.wordPanel')
  var $colorPanel = $('.colorPanel')
  var $startButton = $('.start')
  var $restartButton = $('.restart')

  var colorArr = ['red', 'blue', 'yellow', 'green']
  var wordArr = ['green', 'purple', 'grey', 'black', 'blue', 'pink', 'yellow', 'orange', 'gold', 'silver']
  $restartButton.hide()

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
    // generateColor()
    generateWord()
    $startButton.hide()
    $restartButton.show()
    $wordPanel.children().show()
    $colorPanel.children().show()
    $restartButton.on('click', restartClick)
  }
  function restartClick() {
    $restartButton.hide()
    $startButton.show()
    $wordPanel.children().remove()
    $colorPanel.children().remove()
    $wordPanel.children().hide()
    $colorPanel.children().hide()
  }
  function generateColor() {
    var shuffleColor = shuffle(colorArr)
    for (var i = 0; i < colorArr.length; i++) {
      $colorPanel.append('<div class="box' + shuffleColor[i] + '"></div>')
    }
  }
  function generateWord() {
    var shuffleWord = shuffle(wordArr)
    var shuffleColor = shuffle(colorArr)
    // $wordPanel.append('<div class="word' + shuffleColor + '">' + shuffleWord + '</div>')
  }
  // function matcher() {
  //   if () {
  //
  //   } else {
  //
  //   }
  // }
  $startButton.on('click', startClick)
})
