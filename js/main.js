'use strict'

const maxDiameter = 400

console.log(getRandomInt(1,10));

function onBallClick(ball) {
    const currValue = +ball.innerText
    const randInc = getRandomInt(20,60)
    ball.style.width = currValue + randInc + 'px' 
    ball.style.height = currValue + randInc + 'px' 
    ball.innerText = currValue + randInc
    ball.style.backgroundColor = getRandomColor()
    currValue = currValue + randInc

    if (maxDiameter >= 400) {
    ball.style.width = '100px' 
    ball.style.height = '100px' 
    ball.innerText = 100
    }
}

function onBall3Click() {
    const ball1 = document.querySelector('.ball1')
    const ball2 = document.querySelector('.ball2')

    var ball1Width = ball1.style.width
    var ball1Height = ball1.style.height
    var ball2Width = ball2.style.width
    var ball2Height = ball2.style.height
    
    ball1.style.width = ball2Width
    ball1.style.height = ball2Height
    ball2.style.width = ball1Width
    ball2.style.height = ball1Height 
}