let audio = new Audio("assets/audio/background.mp3");
audio.loop = true;

let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}