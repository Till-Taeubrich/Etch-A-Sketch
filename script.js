// Variables
const defaultSquareQuantityRow = 16;
const defaultSquareQuantityColumn = defaultSquareQuantityRow;
const container = document.getElementById('container');
const clearButton = document.getElementById('clearButton');

let SquareQuantityRow = defaultSquareQuantityRow;
let SquareQuantityColumn = defaultSquareQuantityColumn;

// Functions
window.onload = function(){
  createGrid();
}

function createGrid() {
  container.style.setProperty('--grid-rows', SquareQuantityRow);
  container.style.setProperty('--grid-columns', SquareQuantityColumn);

  for (let i = 0; i < (SquareQuantityRow * SquareQuantityColumn); i++) {
  createSquare();
  }
}

function createSquare() {
  let square = document.createElement('div');
  container.append(square);
  square.style.border = '1px solid black';

  square.addEventListener('mouseenter', function(){
    changeColor(square);
  })
}

function changeColor(e){
  e.style.backgroundColor = 'green';
}

function clearGrid(){
  container.innerHTML = '';
}

function askForNewSize() {
  SquareQuantityRow = prompt('How many squares per row/column? (Limit = 100)', '');
  SquareQuantityColumn = SquareQuantityRow

  for (;;) {
    if (SquareQuantityRow >= 1 && SquareQuantityRow <= 100) {
      createGrid();
      break;
    }
    else {
      alert('Wrong Input. Please select number between 1 - 100');
      askForNewSize();
    }
  }
}


// Events
clearButton.addEventListener('click', function() {
clearGrid();
askForNewSize();
})