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

const playIndex = 2;

// load song info 
loadSong(songs[playIndex])

// functions
function loadSong(song){
    musicTitle.innerText = song;
    musicCover.src = `images/${song}.jpg`;
    audio.src = `music/${song}.mp3`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    // playPrev.querySelector('i.fas').classList.add('fa-backward')
    playIndex --;
    if (playIndex < 0) {
        playIndex = songs.length -1;
    } else {
        loadSong(songs[playIndex])
    }

}

function nextSong() {
    // playNext.querySelector('i.fas').classList.add('fa-forward');
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

// next and prev songs
nextBtn.addEventListener('click', prevSong);
prevBtn.addEventListener('click', nextSong);