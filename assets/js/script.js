const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.gameOver');
const restart = document.querySelector('.restart');

let gameOn = false;
let score = 0;


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (score > 0 && score <= 60) {
        pipe.style.animation = 'pipe-animation 3s linear infinite'; 
    } else if (score > 60 && score <= 100) {
        pipe.style.animation = 'pipe-animation 2s linear infinite';
        
    } else if (score > 100 && score <= 200) {
        pipe.style.animation = 'pipe-animation 1s linear infinite';
    } else {
        pipe.style.animation = 'pipe-animation .5s linear infinite';
    }
    
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        gameOver.style.display = 'block';
        restart.style.display = 'block';

        clearInterval(loop);
        gameOn = true;
    }

}, 10);

const points = setInterval(() => {
    
    score++;

   

    const scores = document.querySelector('.score');
    scores.textContent = score;


    if (gameOn === true) {
        clearInterval(points);
    }

}, 100);

restart.addEventListener('click', () => {
    location.reload();
})

document.addEventListener('keydown', jump);