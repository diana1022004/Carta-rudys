// ============================================
// CONTROL DE MÚSICA DE FONDO
// ============================================

const bgMusic = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const musicBtn = document.querySelector('.music-btn');

let isPlaying = false;

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Permitir autoplay con sonido silenciado
  bgMusic.volume = 0.3;
  
  // Actualizar botones de estado
  updateMusicButtons();

  // Listeners de eventos
  bgMusic.addEventListener('play', updateMusicButtons);
  bgMusic.addEventListener('pause', updateMusicButtons);
  volumeSlider.addEventListener('change', (e) => setVolume(e.target.value));
});

// ============================================
// CONTROL DE REPRODUCCIÓN
// ============================================

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play().catch(err => {
      console.log('Autoplay bloqueado, requiere interacción del usuario:', err);
    });
    isPlaying = true;
  } else {
    bgMusic.pause();
    isPlaying = false;
  }
  updateMusicButtons();
}

function setVolume(value) {
  bgMusic.volume = value / 100;
  volumeSlider.value = value;
}

// ============================================
// ACTUALIZACIÓN DE INTERFAZ
// ============================================

function updateMusicButtons() {
  if (bgMusic.paused) {
    playPauseBtn.innerHTML = '<span class="play-icon">▶</span>';
    musicBtn.innerHTML = '<span class="music-icon">🔇</span>';
    musicBtn.classList.remove('playing');
  } else {
    playPauseBtn.innerHTML = '<span class="play-icon">⏸</span>';
    musicBtn.innerHTML = '<span class="music-icon">🔊</span>';
    musicBtn.classList.add('playing');
  }
}

// ============================================
// MANEJO DE ERRORES DE AUTOPLAY
// ============================================

bgMusic.addEventListener('loadedmetadata', () => {
  // La música está lista
  console.log('Música cargada y lista');
});

bgMusic.addEventListener('error', (e) => {
  console.log('Error al cargar la música:', e);
});