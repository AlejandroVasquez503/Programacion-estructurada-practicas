// Arreglo de canciones con información como título, artista, ruta de archivo y portada
const songs = [
    { title: 'Live & Learn', artist: 'Crush 40', src: 'music/Live & Learn.mp3', cover: 'img/Crush_40.png' },
    { title: 'I’m with you', artist: 'SEGA', src: 'music/I’m with you.mp3', cover: 'img/Sonic portada.png' },
    { title: 'Comatose', artist: 'Skillet', src: 'music/Comatose.mp3', cover: 'img/Skilletcomatose.png' },
    { title: 'Vandalize', artist: 'ONE OK ROCK', src: 'music/Vandalize.mp3', cover: 'img/One ok rock portada.png' },
    // Agrega más canciones según tus necesidades
];

// Índice de la canción actual en reproducción
let currentSongIndex = 0;

// Variable para rastrear si la música está reproduciéndose o no
let isPlaying = false;

// Objeto que representa la instancia de reproducción de audio usando la biblioteca Howler.js
let audio;

// Función para cargar y reproducir la canción actual
function playCurrentSong() {
    // Detén la reproducción si hay una instancia de audio previa
    if (audio) {
        audio.stop();
    }

    // Crea una nueva instancia de reproducción de audio con la canción actual
    audio = new Howl({
        src: [songs[currentSongIndex].src],
        autoplay: isPlaying, // Reproduce automáticamente si la música está en reproducción
        volume: volumeSlider.value, // Establece el volumen inicial
        onend: function () {
            // Cuando la canción actual termina, reproduce la siguiente
            playNextSong();
        }
    });

    // Actualiza la información de la canción en la interfaz
    updateSongInfo();
}

// Elementos de la interfaz obtenidos por su ID
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause'); 
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.querySelector('.card-img-top');

// Evento para el botón de reproducción
playButton.addEventListener('click', () => {
    isPlaying = true; // Se establece el estado de reproducción
    playCurrentSong(); // Llama a la función para reproducir la canción actual
});

// Evento para el botón de pausa
pauseButton.addEventListener('click', () => {
    isPlaying = false; // Se establece el estado de no reproducción
    audio.pause(); // Pausa la reproducción de audio
});

// Evento para el botón de siguiente canción
nextButton.addEventListener('click', () => {
    playNextSong(); // Llama a la función para reproducir la siguiente canción
});

// Evento para el botón de canción anterior
prevButton.addEventListener('click', () => {
    // Si la reproducción actual está más allá de los primeros 5 segundos, reinicia la canción
    if (audio.seek() > 5) {
        audio.seek(0);
    } else {
        // Si no, cambia a la canción anterior y la reproduce
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playCurrentSong();
    }
});

// Evento para el deslizador de volumen
volumeSlider.addEventListener('input', () => {
    // Actualiza el volumen durante el deslizamiento
    audio.volume(volumeSlider.value);
});

// Función para actualizar la información de la canción actual en la interfaz
function updateSongInfo() {
    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCover.src = songs[currentSongIndex].cover;
}

// Función para reproducir la siguiente canción
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Cambia a la siguiente canción en el ciclo
    playCurrentSong(); // Llama a la función para reproducir la nueva canción
}

// Reproduce la primera canción al cargar la página
playCurrentSong();
