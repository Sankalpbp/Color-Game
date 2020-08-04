var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function () {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");

    if (this.textContent === "Easy") {
      numberOfSquares = 3;
    } else {
      numberOfSquares = 6;
    }

    reset();
  });
}

function reset() {

  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  messageDisplay.textContent = "";
  h1.style.background = "steelblue";
  resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function () {

  reset();
})

colorDisplay.textContent = pickedColor;

// var clickedColor = colors[4].style.background;

for (var i = 0; i < squares.length; i++) {

  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function () {

    var clickedColor = this.style.background;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      messageDisplay.textContent = "Try Again";
      this.style.background = "#232323";
    }
  });
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeColors(color) {

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function randomColor() {
  // red
  var r = Math.floor(Math.random() * 256);
  // green
  var g = Math.floor(Math.random() * 256);
  // blue;
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {

  // make an array
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}