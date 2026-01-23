let musicPlaying = false;
let music;
let musicBtn;

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicBtn.textContent = '🔇';
        musicPlaying = false;
    } else {
        music.play().catch(err => {
            console.log('Error al reproducir:', err);
        });
        musicBtn.textContent = '🔊';
        musicPlaying = true;
    }
}

function iniciarMusicaAutomatica() {
    music.play().then(() => {
        musicBtn.textContent = '🔊';
        musicPlaying = true;
    }).catch(() => {
        // Si falla el autoplay, mostrar mensaje al usuario
        musicBtn.textContent = '🔇';
        musicBtn.style.animation = 'pulse 1s infinite';
    });
}

function crearConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe'];
    for(let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 4) + 's';
        document.body.appendChild(confetti);
    }
}

function crearEstrellas() {
    const fireworks = document.getElementById('fireworks');
    for(let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 1.5 + 's';
        fireworks.appendChild(star);
    }
}

function celebrar() {
    const card = document.querySelector('.card');
    card.style.animation = 'none';
    setTimeout(() => {
        card.style.animation = 'slideIn 0.5s ease-out';
    }, 10);
    
    crearConfetti();
    
    // Intentar reproducir música si no está sonando
    if (!musicPlaying) {
        toggleMusic();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    music = document.getElementById('bgMusic');
    musicBtn = document.getElementById('musicBtn');
    crearConfetti();
    crearEstrellas();
    
    // Intentar reproducir automáticamente
    setTimeout(iniciarMusicaAutomatica, 500);
});

// Intentar reproducir con cualquier interacción del usuario
document.addEventListener('click', function iniciarConClick() {
    if (!musicPlaying) {
        toggleMusic();
    }
    document.removeEventListener('click', iniciarConClick);
}, { once: true });