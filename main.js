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
const songs = ['Summer','Shembe','Love','Not-easy','Big-boys']

const playIndex = 3;

// load song info 
loadSong(songs[playIndex])

// functions
function loadSong(song){
    musicTitle.innerText = song;
    musicCover.src = `images/${song}.jpg`;
    audio.src = `music/${song}.mp3`;
}

function pauseSong() {
    musicContainer.classList.contains('play')
}

// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})