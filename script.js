// Fecha de cumpleaños: 16 de Septiembre 2025, 00:00 UTC-3 (Argentina) = 22:00 UTC-5 (Ecuador)
const birthdayDate = new Date('2025-09-16T03:00:00Z'); // UTC equivalente a 00:00 ARG / 22:00 ECT

const starsGame = document.getElementById('stars-game');
const birthday = document.getElementById('birthday');

function updatePage() {
  const now = new Date();
  if (now >= birthdayDate) {
    starsGame.classList.add('hidden');
    birthday.classList.remove('hidden');
    launchConfetti();
  } else {
    starsGame.classList.remove('hidden');
    birthday.classList.add('hidden');
  }
}

function showMessage(id) {
  const messageElement = document.getElementById(`message-${id}`);
  const starElement = document.getElementById(`star-${id}`);
  messageElement.classList.remove('hidden');
  starElement.classList.add('hidden'); // Oculta la estrella al clickear
}

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#4b0082', '#8b008b', '#000000', '#d8bfd8'] // Morados y negro
  });
}

// Actualizar al cargar y cada segundo
setInterval(updatePage, 1000);
updatePage();
