var tracks = [
    { title: "Just my universe", url: "Just my universe.mp3", cover: "cover1.jpg" },
    { title: "Blinding lights ", url: "Blinding lights.mp3", cover: "cover2.jpg" },
    { title: "Группа крови", url: "Группа крови.mp3", cover: "cover3.jpg" }
];
var currentTrackIndex = 0; 
var isPlaying = false;
var audio = new Audio();

function populateTrackList() {
    var list = document.getElementById('track-list');
    tracks.forEach((track, index) => {
        var listItem = document.createElement('li');
        listItem.textContent = track.title;
        listItem.onclick = function () 
        { playTrack(index); 
            
        };
        list.appendChild(listItem);
    });
}

function PlayPause() {
    if (!isPlaying) {
        audio.src = tracks[currentTrackIndex].url;
        document.getElementById('track-cover').src = tracks[currentTrackIndex].cover;
        audio.play();
        isPlaying = true;
        document.getElementById('play-pause-btn').textContent = 'Pause';
    } else {
        audio.pause();
        isPlaying = false;
        document.getElementById('play-pause-btn').textContent = 'Play';
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    isPlaying = false; 
    togglePlayPause(); 
}

function playTrack(index) {
    currentTrackIndex = index;
    isPlaying = false; 
    PlayPause(); 
}

window.onload = populateTrackList;

