function startGame() {



    const boxes = document.querySelectorAll('.box')
    const mole = document.querySelector('.mole')
    const timeLeft = document.querySelector('#time-left')
    const score = document.querySelector('#score')

    let result = 0
    let hitPosition
    let currentTime = 60
    let timerId = null

    function randomBox() {
    boxes.forEach(box => {
      box.classList.remove('mole')
    })
  
    let randomBox = boxes[Math.floor(Math.random() * 16)]
    randomBox.classList.add('mole')
  
    hitPosition = randomBox.id
  }

  boxes.forEach(box => {
    box.addEventListener('mousedown', () => {
      if (box.id == hitPosition) {
        result++
        score.textContent =result
        hitPosition = null
      }
    })
  })
function move() {
    timerId = setInterval(randomBox, 1000) }

move()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime


   
    if (currentTime == 0) {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert('Your Score Is ' + result)
    }
}
let countDownTimerId = setInterval(countDown, 2000)

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

}
