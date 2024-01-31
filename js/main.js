'use strict'



function onBallClick() {
    const ball = document.querySelector('.ball')
    const currValue = +ball.innerText
    ball.style.width = currValue + 50 + 'px' 
    ball.style.height = currValue + 50 + 'px' 
    ball.innerText = currValue + 50

    if (currValue >= 400) {
    ball.style.width = '100px' 
    ball.style.height = '100px' 
    ball.innerText = 100
    }
}