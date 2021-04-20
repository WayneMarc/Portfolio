const MAX_HIGH_SCORES = 7;
const highScoresButton = document.getElementById("showScoresButton");
const scoreArea = document.getElementById("scoreArea")

let username = "";

let highScores = JSON.parse(localStorage.getItem("result")) || []
highScoresButton.addEventListener("click", result);
function showResults() {
  result = timer;
  if (result < 0) {
    result = 0;
  }
  qElement.innerText = "";
  scoreArea.classList.remove("hide");
  answerButtons.classList.add("hide");
  scoreArea.innerHTML = `Your score is ${result}!<div id="init">Name: <input type="text" name="initials" id="initials" placeholder="Enter Your Name"><button id="save-btn" class="save-btn btn" onclick="submitScores(event)" disabled>Save</button>`;
  username = document.getElementById("initials");
  saveButton = document.getElementById("save-btn");
  username.addEventListener("keyup", function() {
    saveButton.disabled = !username.value; });
}
function submitScores(e) {
    const result = {
      score: result,
      name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);
  
    localStorage.setItem("highScores", JSON.stringify(highScores));
    displayScores();
  }
  function displayScores() {
    clearInterval(runningTimer);
    countdown.innerHTML = "";
    clearQuestion();
    qElement.innerText = "";
    scoreArea.classList.remove("hide");
  
    scoreArea.innerHTML = `<h2>High Scores</h2><ul id="highScoresList"></ul><button id="clearScores" class="btn" onclick="clearScores()">Clear Scores</button>`;
    const highScoresList = document.getElementById("highScoresList");
    highScoresList.innerHTML = highScores
      .map(score => {
        return `<li class="scoresList">${score.name} - ${score.score}</li>`;
      })
      .join("");
    startButton.classList.remove("hide");
    highScoresButton.classList.add("hide");
  }