const guessValue = document.querySelector(".guess_value");
const squares = document.querySelectorAll(".square");
const colors = [];
let isWin = false;

//to produce color and store in an array
for (let i = 0; i < 9; i++) {
  colors.push(
    `rgb(${Math.floor(Math.random() * 256)} ,${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`
  );
}

//to fill the squares
squares.forEach((square, i) => {
  square.style.background = colors[i];
  square.setAttribute("color", colors[i]);
});

//to show the random color text
const valueForGuess = colors[Math.floor(Math.random() * 9)]; //0 to 8
guessValue.textContent = valueForGuess;

//if the click was right by checking same color then all squares will be changed to same color , id not then disappear

squares.forEach((square) => {
  square.addEventListener("click", (event) => {
    const squareColor = event.target.getAttribute("color");
    if (!isWin) {
      if (squareColor === valueForGuess) {
        squares.forEach((square) => {
          square.style.background = valueForGuess;
        });
        isWin = true;
        restart.style.display = "block";
      } else {
        square.style.backgroundColor = "#0c1722";
      }
    }
  });
});

//restart the game
const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
  location.reload();
});
