  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  var wins = 0;
  var losses = 0;
  var lives = 10;


  document.onkeyup = function (event) {

    var userGuess = event.key;


    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (userGuess === computerGuess) {
      wins++;
    } else if (userGuess != computerGuess) {
      losses++;
      lives--;
    }
      

    




    var html =
      "<p>You chose: " + userGuess + "</p>" +
      "<p>The computer chose: " + computerGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>lives: " + lives + "</p>";


    document.querySelector("#game").innerHTML = html;
  }