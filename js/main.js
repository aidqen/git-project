'use strict'

console.log(getRandomInt(1,10));

function onBallClick() {
    const ball = document.querySelector('.ball')
    const currValue = +ball.innerText
    const randInc = getRandomInt(20,60)
    ball.style.width = currValue + randInc + 'px' 
    ball.style.height = currValue + randInc + 'px' 
    ball.innerText = currValue + randInc
    ball.style.backgroundColor = getRandomColor()

    if (currValue >= 400) {
    ball.style.width = '100px' 
    ball.style.height = '100px' 
    ball.innerText = 100
    }
}