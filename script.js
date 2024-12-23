let audioPlayer = document.getElementById('audioPlayer');
let playlist = ['music/song1.mp3', 'music/song2.mp3', 'music/song3.mp3'];
let currentTrack = 0;

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    audioPlayer.src = playlist[currentTrack];
    audioPlayer.play();
}

function previousTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    audioPlayer.src = playlist[currentTrack];
    audioPlayer.play();
}

function changeTrack(track) {
    audioPlayer.src = track;
    audioPlayer.play();
}
