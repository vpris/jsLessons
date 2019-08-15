"use strict";

let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let $time = document.querySelector('#time');
let $result = document.querySelector('#result');
let $timeHeader = document.querySelector('#time-header');
let $resultHeader = document.querySelector('#result-header');
let $gameTime = document.querySelector('#game-time');




function backgrounds() {
    let bodys = document.querySelector('body');

    let bodysBackgrounds = [
        'linear-gradient(to left bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
        'linear-gradient(to left bottom, #1d5ebf, #6154bd, #8c46b4, #ae31a3, #c90a8b)',
        'linear-gradient(to left bottom, #72acfc, #7976b1, #61496b, #372531, #000000)',
        'linear-gradient(to left bottom, #72fca1, #00dac7, #00b1e7, #0082e7, #1d49ba)',
        'linear-gradient(to right bottom, #d672fc, #be5deb, #a549db, #8c34ca, #721dba)'
    ];

    let bodysBackgroundsArr = getRandom(0, bodysBackgrounds.length);

    console.log(bodysBackgrounds[bodysBackgroundsArr]);
    bodys.style.backgroundImage = bodysBackgrounds[bodysBackgroundsArr];

}
backgrounds();


let score = 0;
let isGameStarted = false;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$gameTime.addEventListener('input', setGameTime);

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}



function startGame() {
    score = 0;
    setGameTime();
    $gameTime.setAttribute('disabled', 'true');
    isGameStarted = true;
    $game.style.backgroundColor = '#fff';
    hide($start);

    
    let interval = setInterval(function () {
        let time = parseFloat($time.textContent);
        console.log('interval', $time.textContent);

        if (time <= 0) {
            clearInterval(interval);
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }

    }, 100)

    renderBox()
}

function setGameScore() {
    $result.textContent = score;
}

function setGameTime() {
    let time =  parseInt($gameTime.value);
    $time.textContent = time.toFixed(1);
    show($timeHeader);
    hide($resultHeader);
}

function endGame() {
    isGameStarted = false;
    setGameScore();
    $gameTime.removeAttribute('disabled');
    show($start);
    $game.innerHTML = '';
    $game.style.backgroundColor = '#ccc';
    hide($timeHeader);
    show($resultHeader);
}

function handleBoxClick(event) {

    if (!isGameStarted) {
        return
    }

    if (event.target.className === 'korobka') {
        score++;
        renderBox()
    }
}


function renderBox() {
    $game.innerHTML = '';
    let box = document.createElement('div');
    let boxSize = getRandom(20, 70);
    let gameSize = $game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;

    let colors = ['#6fb10a', '#b10a1f', '#00d4ff', '#0a14b1', '#ff00ee', '#00bcd4'];
    let colorNumbArray = getRandom(0, colors.length);
    let colorsArray = colors[colorNumbArray];


    box.className = 'korobka';
    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = colorsArray;
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.borderRadius = '4px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    $game.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}