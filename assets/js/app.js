const PLAYING = 'playing';
const PAUSED = 'paused';
const STATUS = { PLAYING, PAUSED};

function handlePlayEvent()
{
    console.log('y el click?');
    let player = document.getElementById('radioPlayer');
    let actualStatus = sessionStorage.getItem('status');
    if(actualStatus === STATUS.PAUSED) {
        player.play();
        actualStatus = STATUS.PLAYING;
    } else {
        player.pause();
        actualStatus = STATUS.PAUSED;
    }
    sessionStorage.setItem('status', actualStatus) ;
}

function init()
{
    sessionStorage.setItem('status', STATUS.PAUSED) ;
    let radio = document.getElementById('radio');
    radio.addEventListener('click',  handlePlayEvent);
}

window.onload = init;