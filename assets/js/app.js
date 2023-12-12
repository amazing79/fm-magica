const PLAYING = 'playing';
const PAUSED = 'paused';
const NOT_LOADED = 'not-loaded';
const LOADED  = 'loaded';
const RADIO_URL = 'https://radio.netyco.com:17238/;stream.mp3';
const STATUS = { PLAYING, PAUSED, LOADED, NOT_LOADED};

function handlePlayEvent(evt)
{
    evt.target.classList.toggle('active');
    let player = document.getElementById('radioPlayer');
    let actualStatus = sessionStorage.getItem('status');
    let loadedStatus = sessionStorage.getItem('loaded');
    if(loadedStatus === STATUS.NOT_LOADED) {
        sessionStorage.setItem('loaded', STATUS.LOADED);
        player.src = RADIO_URL;
    }
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
    sessionStorage.setItem('loaded', STATUS.NOT_LOADED);
    let radio = document.getElementById('radio');
    radio.addEventListener('click',  handlePlayEvent);
}

window.onload = init;