$(document).ready(function () {
  var $body = $('body')
  var $header = $('header')
  var $wordPanel = $('.wordPanel')
  var $colorPanel = $('.colorPanel')
  var $startButton = $('.start')
  var $restartButton = $('.restart')

  var colorArr = ['red', 'blue', 'yellow', 'green']
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
  // function randomiser (min, max) {
  //   return Math.floor(Math.random() * (max - min - 1)) + min
  // }
  function startClick() {
    generateColor()
    $startButton.hide()
    $restartButton.show()
    $wordPanel.show()
    $colorPanel.show()
    $restartButton.on('click', restartClick)
  }
  function restartClick() {
    $restartButton.hide()
    $startButton.show()
    $colorPanel.children().remove()
    $wordPanel.hide()
    $colorPanel.children().hide()
  }
  function generateColor() {
    var shuffleColor = shuffle(colorArr)
    for (var i = 0; i < 4; i++) {
      $colorPanel.append('<div class="box' + shuffleColor[i] + '"></div>')
    }
  }
  function generateWord() {
    $wordPanel.append('<div class="red">blue</div>')
  }
  function matcher() {
    if(($) === ())
  }
  $startButton.on('click', startClick)
})
