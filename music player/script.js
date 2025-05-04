const songs = [
    { name: "song1.mp3", title: "song1" },
    {name:"song2.mp3",title: "song2"}
]


const title = document.querySelector("#title");
const audio = document.querySelector("audio");
const playBtn = document.querySelector("#play"); 
const pre = document.querySelector("#prev");
const next = document.querySelector("#next");
let isPlaying = false;
let songIndex = 0;

playBtn.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play();
        playBtn.innerHTML = "⏸️";
        isPlaying = true;
    } else {
        audio.pause();
        playBtn.innerHTML = "▶️";
        isPlaying = false;
    }
});


function loadSong(index) {
    const song = songs[index];
    audio.src = "assests/" + song.name;
    title.innerHTML = song.title;

    if (isPlaying) {
        audio.play();
    }
}

next.addEventListener("click", function () {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    } else {
        loadSong(songIndex)
    }
});

pre.addEventListener("click", function () {
    songIndex--;
    if (songIndex < 0 ) {
        songIndex = songIndex-1;
    } else {
        loadSong(songIndex)
    }
});


