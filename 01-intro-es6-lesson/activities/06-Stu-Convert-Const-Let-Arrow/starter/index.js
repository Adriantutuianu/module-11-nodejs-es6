//TODO: Update the following variables on this file to the new ES6 variables.
var $root = document.querySelector("#root");

var score;
var targetScore;

//TODO: Update this function to an arrow function.
var makeGuess = function() {
  var $score = document.querySelector("#root p");
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;

  if (score > targetScore) {
    alert("You lost this round!");
    playRound();
  } else if (score === targetScore) {
    alert("You won this round!");
    playRound();
  }
};

//TODO: Does this function require an arrow function?
var Crystal = function(color) {
  this.element = document.createElement("div");
  this.element.className = "crystal " + color;
  this.value = 0;

  //TODO: Can we update this function to an arrow function?
  this.element.addEventListener(
    "click",
    function() {
      score += this.value;
      makeGuess();
    }.bind(this),
    false
  );
};

Crystal.prototype.render = function(target) {
  this.value = Math.floor(Math.random() * 15) + 1;
  target.appendChild(this.element);
};

var crystals = [new Crystal("red"), new Crystal("blue"), new Crystal("green")];

//TODO: Update this function to an arrow function.
var playRound = function() {
  var fragment = document.createDocumentFragment();
  var $score = document.createElement("p");
  targetScore = Math.floor(Math.random() * 50) + 25;
  score = 0;
  $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;
  crystals
    .sort(function() {
      return 0.5 - Math.random();
    })
    .forEach(function(crystal) {
      crystal.render(fragment);
    });
  fragment.appendChild($score);
  $root.innerHTML = "";
  $root.appendChild(fragment);
};

playRound();
