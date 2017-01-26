var rls = require('readline-sync');

var Game = function() {

  // some presentation of board
  this.board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']]
  this.player = 'x'
  this.move = 0

}

Game.prototype.print = function() {
  this.board.forEach((row) => {
    console.log(row)
  })
}

Game.prototype.swapPlayer = function() {
  if (this.player === 'x') {
    this.player = 'o'
  } else if (this.player === 'o') {
    this.player = 'x'
  }
}

Game.prototype.placeMove = function(x,y) {
  if (this.board[x][y] !== '-') {
    console.log('Invalid Move')
    this.print(this.board)
    this.getMove()
  } else {
    this.board[x][y] = this.player
    this.print(this.board)
    if (this.checkWin(this.player)) {
      console.log(`${this.player} wins!`)
      return 
    } else {
      this.swapPlayer()
      this.getMove()
    }
  }
}

Game.prototype.getMove = function() {
  var move = rls.question(`It's ${this.player}'s turn, where would you like to go? (i.e. 0,0)`)
  var x = parseInt(move.split(',')[0])
  var y = parseInt(move.split(',')[1])
  this.placeMove(x,y)
}

Game.prototype.checkWin = function(player) {
  return (this.checkHorizontal(player) || this.checkVertical(player) || this.checkDiagonal(player))
}

Game.prototype.checkHorizontal = function(player) {
  if ((this.board[0][0] === player && this.board[0][1] === player && this.board [0][2] === player)
    || (this.board[1][0] === player && this.board[1][1] === player && this.board [1][2] === player) 
    || (this.board[2][0] === player && this.board[2][1] === player && this.board [2][2] === player)) {
    return true
  } else {
    return false
  }
}

Game.prototype.checkVertical = function(player) {
  if ((this.board[0][0] === player && this.board[1][0] === player && this.board [2][0] === player) 
    || (this.board[0][1] === player && this.board[1][1] === player && this.board [2][1] === player) 
    || (this.board[0][2] === player && this.board[1][2] === player && this.board [2][2] === player)) {
    return true
  } else {
    return false
  }
}

Game.prototype.checkDiagonal = function(player) {
  if ((this.board[0][0] === player && this.board[1][1] === player && this.board [2][2] === player)
    || (this.board[0][2] === player && this.board[1][1] === player && this.board [2][0] === player)) {
    return true
  } else {
    return false
  }
}

var play = new Game()
play.print()
play.getMove()


