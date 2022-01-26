// Variables
const SquareQuantityRow = 5;
const SquareQuantityColumn = SquareQuantityRow;
const container = document.getElementById('container');

// Functions

function createSquare() {
  let square = document.createElement('div');
  container.append(square);
  square.style.border = '1px solid black';
}

function createGrid() {

  container.style.setProperty('--grid-rows', SquareQuantityRow);
  container.style.setProperty('--grid-columns', SquareQuantityColumn);

  for (let i = 0; i < (SquareQuantityRow * SquareQuantityColumn); i++) {
    createSquare()
  }
}

createGrid()