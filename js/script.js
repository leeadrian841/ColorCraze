$(document).ready(function () {
  var $body = $('body')
  var $introPanel = $('.intro')
  var $boardPanel = $('.board')
  var $startButton = $('.start')
  var $restartButton = $('.restart')
  // var $boxes = $('.box')
  var $boardInside = $boardPanel.children()

  var boxes = 10
  var openBox = ''
  var openTile = ''
  var Tiles = ['https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif', 'https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif']

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function shuffleBoxes() {
    for (var i = 0; i <= boxes; i++) {
      $boardPanel.append('<div class="box"><img src="' + Tiles[random(0, 13)] + '"></div>')
    }
  }
  function clickTile() {

  }
  $boardPanel.hide()
  $startButton.on('click', startGame)
  $restartButton.on('click', restartGame)

  function startGame() {
    shuffleBoxes()
    $boardPanel.show()
    $introPanel.hide()


  }
  // function restartGame() {
  //   $introPanel.show()
  //   $boardPanel.hide()
  // }
})
