var noOfSquares = 6;
var arr = [];
var picked;
var squares = document.getElementsByClassName("square");
var targetColor = document.getElementById("targetColor");
var message = document.getElementById("message");
var head = document.querySelector("h1");
var reset = document.getElementById("NewColor");

init();

function init() {
    // Generate initial colors
    arr = generateRandomColors(noOfSquares);
    // Pick a random color from the array
    picked = arr[randomPickedColorIndex()];
    // Display the picked color as the target
    targetColor.textContent = picked;

    // Set up the squares with colors
    for (var i = 0; i < squares.length; i++) {
        if (arr[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = arr[i];
            squares[i].addEventListener("click", function () {
                var clickedColor = this.style.backgroundColor;
                if (clickedColor === picked) {
                    message.textContent = "Correct!";
                    changeColors(picked);
                    head.style.backgroundColor = picked;
                } else {
                    this.style.backgroundColor = "#232323";
                    message.textContent = "Try Again";
                }
            });
        } else {
            squares[i].style.display = "none";
        }
    }

    // Reset button event listener
    reset.addEventListener("click", function () {
        resetGame();
    });
}

function resetGame() {
    // Generate new colors
    arr = generateRandomColors(noOfSquares);
    // Pick a new random color
    picked = arr[randomPickedColorIndex()];
    // Update the target color display
    targetColor.textContent = picked;
    // Clear the message
    message.textContent = "";
    // Reset the header background color
    head.style.backgroundColor = "steelblue";

    // Update the squares with new colors
    for (var i = 0; i < squares.length; i++) {
        if (arr[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = arr[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    // Change the color of all squares to the correct color
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function randomPickedColorIndex() {
    // Pick a random index from the array
    return Math.floor(Math.random() * arr.length);
}

function generateRandomColors(num) {
    // Generate an array of random colors
    var colors = [];
    for (var i = 0; i < num; i++) {
        colors.push(randomColor());
    }
    return colors;
}

function randomColor() {
    // Generate a random color
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Initialize the game
resetGame();
