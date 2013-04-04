var solveNRooks = function(n){
  // var solution = [
  //   [false, true,  false, false],
  //   [false, false, false, true ],
  //   [true,  false, false, false],
  //   [false, false, true,  false]
  // ];
  //var boards = [[[solution1]], [possible_board2]];


  var makeNewBoard = function(n) {
    var board = new Array(n);
    for (var row = 0; row < n; row++) {
      board[row] = new Array(n);
      for (var column = 0; column < n; column++) {
        board[row][column] = false;
      };
    };
    return board;
  };

  var rowIsClear = function(board, row) {
    for (var col = 0; col < board.length; col++) {
      if (board[row][col] == true) {
        return false;
      }
    }
    return true;
  };

  var colIsClear = function(board, col) {
    for (var row = 0; row < board.length; row++) {
      if (board[row][col] == true) {
        return false;
      }
    }
    return true;
  };


  var areDiagsClear = function(x, y, board) {
    var result = false
    if (isUpperLeftClear(x,y,board) &&
        isUpperRightClear(x,y,board) &&
        isLowerLeftClear(x,y,board) &&
        isLowerRightClear(x,y,board)) {
      result = true;
    }
    return result;
  };

  var isUpperLeftClear = function(x, y, board) {
    for (var i=0; i < board.length; i++) {
      if ((y-i < 0) || (x-i < 0)) {
        return true;
      }
      if (board[x-i][y-i] === true) {
        console.log("Hit a queen. Position: Traversing x: " + (x-i) + " y: " + (y-i));
        return false;
      }
    }
  };

  var isLowerLeftClear = function(x, y, board) {
    for (var i=0; i < board.length; i++) {
      if ((y-i < 0) || (x + i > board.length-1)) {
        return true;
      }
      if (board[x+i][y-i] === true) {
        console.log("Hit a queen. Position: Traversing x: " + (x+i) + " y: " + (y-i));
        return false;
      }
    }
  };

  var isUpperRightClear = function(x, y, board) {
    for (var i=0; i < board.length; i++) {
      if ((x-i < 0) || (y+i > board.length-1)){
        return true;
      }
      if (board[x-i][y+i] === true) {
        console.log("Hit a queen. Position: Traversing x: " + (x-i) + " y: " + (y+i));
        return false;
      }
    }
  };

  var isLowerRightClear = function(x, y, board) {
    for (var i=0; i < board.length; i++) {
      if ((x+i > board.length-1) || (y+i > board.length - 1)) {
        return true;
      }
      if (board[x+i][y+i] === true) {
        console.log("Hit a queen. Position: Traversing x: " + (x+i) + " y: " + (y+i));
        return false;
      }
    }
  };


// var result = [];
// generateBoards(n, array, 0);

//   var generateBoards = function(array, start_pos, result) {
//     var array = array || _.range(size);
//     if (array.length === 0) {
//       return array;
//     } else {
//       for (var i = 0; i < array.length; i++) {
//         results.push(array[i]);
//         array.unshift();
//         console.log(array);
//         console.log(result);
//         generateBoards(array, i, result);
//         // result.push(array[i]);
//         // array.unshift();
//         generateBoards(array, i, result);
//       }
//     }
//     return result;
//   };


  var allRooks = function (totalRooks, currentRook) {
    // for (var col = 0; col < totalRooks; col++) {
      for (var row = 0; row < totalRooks; row++) {
        var board = makeNewBoard(totalRooks);
        var results = recurseCols(board, totalRooks, row);
        _.each(results, function(item){ boards.push(item); });
        // new_board - swap


      };
      // var temp = col[i];
      // col[i] = col[i+1];
      // col[i+1] = temp;
    
    }
    return boards;
  };

  var rookSolutions = _.range(3);
  var validSolutions = [];

  var findAllRooks = function (prefix, possibileSolutions) {
    if (possibileSolutions.length == 0) {
      validSolutions.push(prefix);
    }
    for(var i = 0; i < possibileSolutions.length; i++) {
      var newPrefix = possibileSolutions[i];
      debugger;
      var remainingSolutions = possibileSolutions.unshift();
      findAllRooks(newPrefix, remainingSolutions);
    }
  };



  var recurseCols = function(board, totalRooks, currentRow) {
    // if totalRooks === 0, return board;
    if (currentRow < totalRooks) {
      for(var col = 0; col < totalRooks; col++) {
        //board[currentRook][col]
        if ((rowIsClear(board, currentRow)) &&
             (colIsClear(board, col))) {
             // (areDiagsClear(currentRook, col, board))) {
          board[currentRow][col] = true;
          if(currentRow + 1 < board.length) {
            recurseCols(board, totalRooks, currentRow + 1);
          } else {
            recurseCols(board, totalRooks, 0);
          }
        }
      }
    }
    else {
      //rooks left = 0, print solution
    }
    return board;

  };

var n = 3;
var boards = [];
boards = allRooks(n, 3);


  // the above is a pre-baked solution for when n = 4.
  // Write code here that will find solutions for any n
  // hint: you'll want to start by building your own matrix to put in the solution variable

  // this line hooks into the visualizer
  // window.chessboardView.model.setSimpleBoard(solution);
  // return solution;
}
