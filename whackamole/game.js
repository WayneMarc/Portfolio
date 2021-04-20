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
let countDownTimerId = setInterval(countDown, 1000)


}
