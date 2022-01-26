// Variables
const SquareQuantityRow = 5;
const SquareQuantityColumn = SquareQuantityRow;
const container = document.getElementById('container');

// Functions

window.onload = function(){
  createGrid();
}

function createSquare() {
  let square = document.createElement('div');
  container.append(square);
  square.style.border = '1px solid black';
  square.addEventListener('mouseenter', function(){
    changeColor(square);
  })
}

function createGrid() {

  container.style.setProperty('--grid-rows', SquareQuantityRow);
  container.style.setProperty('--grid-columns', SquareQuantityColumn);

  for (let i = 0; i < (SquareQuantityRow * SquareQuantityColumn); i++) {
    createSquare();
  }
}

function changeColor(e){
  e.style.backgroundColor = 'green';
}