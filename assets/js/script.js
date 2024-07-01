const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.gameOver');
const restart = document.querySelector('.restart');
const pipePositionNew = +window.getComputedStyle(mario).left.replace('px', '');

let gameOn = false;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    
    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition)
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


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

let score = 0;

const points = setInterval(() => {
    
    score++;

    const scores = document.querySelector('.score');
    scores.textContent = score;


    if (gameOn === true) {
        clearInterval(points);
    }

}, 100);

let fast = 3;

const speed = setInterval(() => {
    fast -= 0.001;
    pipe.style.animation = `pipe-animation ${fast}s linear infinite`;
    if(gameOn == true) {
        clearInterval(speed);
    }
    
}, 50);


restart.addEventListener('click', () => {
    location.reload();
})

document.addEventListener('keydown', jump);