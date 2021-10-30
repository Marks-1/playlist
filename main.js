// selectors
const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const playNext = document.querySelector('#next');
const playPrev = document.querySelector('#prev');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const musicCover = document.querySelector('#cover');
const musicTitle = document.querySelector('.music-title');


// arrays for the musicTitle 
const songs = ['summer','shembe','days','love me','not easy']

const playIndex = 4;

// load song info 
loadSong(songs[playIndex])

// functions
function loadSong(song){
    musicTitle.innerText = song;
    musicCover.src = `images/${song}.jpg`;
    audio.src = `music/${song}.mp3`;
}

// event listeners