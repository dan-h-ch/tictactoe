var game = function() {


  // some presentation of board
  this.board = [['-', '-', '-'],['-', '-', '-'],['-', '-', '-']]

  var print = function(arr) {
    arr.forEach((row) => {
      console.log(row)
    })
  }

  this.move = function(player, x,y) {
    if (this.board[x][y] !== '-') {
      return 'Invalid Move'
      print(this.board)
    } else {
      this.board[x][y] = player
      print(this.board)
      return this.checkWin(player)
    }
    // console.log(this.board)
    
  }

  this.checkWin = function(player) {
    if ((this.board[0][0] === player && this.board[0][1] === player && this.board [0][2] === player)
      || (this.board[1][0] === player && this.board[1][1] === player && this.board [1][2] === player) 
      || (this.board[2][0] === player && this.board[2][1] === player && this.board [2][2] === player)
      || (this.board[0][0] === player && this.board[1][0] === player && this.board [2][0] === player) 
      || (this.board[0][1] === player && this.board[1][1] === player && this.board [2][1] === player) 
      || (this.board[2][2] === player && this.board[1][2] === player && this.board [2][2] === player) 
      || (this.board[0][0] === player && this.board[1][1] === player && this.board [2][2] === player)
      || (this.board[0][2] === player && this.board[1][1] === player && this.board [2][0] === player)) {
      return `${player} wins!`
    } else if (player === 'x') {
      return "Now it's o's move!"
    } else {
      return "Now it's x's move!"
    }
  }


}